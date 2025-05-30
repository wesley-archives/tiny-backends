-- DATABASE: REAL ESTATE MANAGEMENT SYSTEM

CREATE DATABASE RealEstateDB;
GO

USE RealEstateDB;
GO

-- TABLE: People
CREATE TABLE People (
    id          INT PRIMARY KEY IDENTITY,
    name        VARCHAR(50) NOT NULL,
    cpf         VARCHAR(15) NOT NULL UNIQUE,
    status      INT CHECK (status IN (1,2,3,4))
);
GO

-- TABLE: Owners
CREATE TABLE Owners (
    id          INT PRIMARY KEY REFERENCES People(id),
    agency      INT NOT NULL,
    account     INT NOT NULL
);
GO

-- TABLE: Brokers
CREATE TABLE Brokers (
    id              INT PRIMARY KEY REFERENCES People(id),
    creci           VARCHAR(10) NOT NULL,
    base_salary     DECIMAL(10,2) NOT NULL DEFAULT 2500.00 CHECK (base_salary >= 2500.00),
    salary          DECIMAL(10,2) DEFAULT 0 CHECK (salary >= 0)
);
GO

-- TABLE: Tenants
CREATE TABLE Tenants (
    id          INT PRIMARY KEY REFERENCES People(id),
    income      DECIMAL(10,2) NOT NULL CHECK (income >= 500.00)
);
GO

-- TABLE: Phones
CREATE TABLE Phones (
    person_id       INT NOT NULL,
    number          VARCHAR(20) NOT NULL,
    PRIMARY KEY (person_id, number),
    FOREIGN KEY (person_id) REFERENCES People(id)
);
GO

-- TABLE: Properties
CREATE TABLE Properties (
    id              INT PRIMARY KEY IDENTITY,
    owner_id        INT NOT NULL REFERENCES Owners(id),
    tenant_id       INT NULL REFERENCES Tenants(id),
    description     VARCHAR(100) NOT NULL,
    value           MONEY NOT NULL CHECK (value >= 300.00),
    rental_date     DATE NULL,
    status          INT DEFAULT 1
);
GO

-- TABLE: Broker-Property Management
CREATE TABLE BrokerPropertyManagement (
    broker_id       INT NOT NULL,
    property_id     INT NOT NULL,
    operation_date  DATETIME NOT NULL DEFAULT GETDATE(),
    payment_date    DATE NULL,
    commission      MONEY NOT NULL DEFAULT 0 CHECK (commission >= 0),
    status          INT DEFAULT 1,
    PRIMARY KEY (broker_id, property_id, operation_date),
    FOREIGN KEY (broker_id) REFERENCES Brokers(id),
    FOREIGN KEY (property_id) REFERENCES Properties(id),
    CHECK (operation_date <= payment_date OR payment_date IS NULL)
);
GO

-- TABLE: Rent Adjustment History
CREATE TABLE RentAdjustmentHistory (
    id              INT PRIMARY KEY IDENTITY,
    property_id     INT NOT NULL REFERENCES Properties(id),
    adjustment_date DATE DEFAULT GETDATE(),
    adjusted_by     VARCHAR(50) DEFAULT USER_NAME(),
    new_value       MONEY NOT NULL
);
GO

-- VIEW: List properties with owner name
CREATE VIEW View_PropertyWithOwner AS
SELECT 
    p.id AS property_id,
    p.description,
    p.owner_id,
    pe.name AS owner_name
FROM Properties p
JOIN Owners o ON p.owner_id = o.id
JOIN People pe ON o.id = pe.id;
GO

-- VIEW: List all properties with owner and tenant
CREATE VIEW View_AllProperties AS
SELECT 
    p.id AS property_id,
    p.description,
    p.status,
    p.owner_id,
    o.name AS owner_name,
    p.tenant_id,
    t.name AS tenant_name
FROM Properties p
LEFT JOIN People o ON o.id = p.owner_id
LEFT JOIN People t ON t.id = p.tenant_id;
GO

-- VIEW: List only rented properties
CREATE VIEW View_RentedProperties AS
SELECT 
    p.id AS property_id,
    p.description,
    p.status,
    p.tenant_id,
    pe.name AS tenant_name
FROM Properties p
JOIN Tenants t ON p.tenant_id = t.id
JOIN People pe ON t.id = pe.id
WHERE p.status = 1;
GO

-- TRIGGER: Save rent history when value changes
CREATE TRIGGER trg_InsertRentHistory
ON Properties
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO RentAdjustmentHistory (property_id, new_value)
    SELECT 
        i.id,
        i.value
    FROM inserted i
    JOIN deleted d ON i.id = d.id
    WHERE i.value <> d.value;
END;
GO

-- Trigger: Mark Property as Unavailable Instead of Deleting
CREATE TRIGGER tr_property_unavailable
ON Properties
INSTEAD OF DELETE
AS 
BEGIN
    UPDATE Properties
    SET status = 3
    WHERE id IN (
        SELECT d.id
        FROM deleted d
        JOIN Properties p ON d.id = p.id
        WHERE p.status != 1
    );
END;
GO

-- Procedure: Create Owner And Property
CREATE PROCEDURE CreateOwnerAndProperty
    @owner_name         VARCHAR(50),
    @owner_cpf          VARCHAR(15),
    @owner_status       INT,
    @bank_agency        INT,
    @bank_account       INT,
    @property_desc      VARCHAR(100),
    @property_value     MONEY,
    @property_status    INT = 1
AS
BEGIN
    DECLARE @owner_id INT;

    -- Insert the owner as a person
    INSERT INTO People (name, cpf, status)
    VALUES (@owner_name, @owner_cpf, @owner_status);

    SET @owner_id = SCOPE_IDENTITY();

    -- Insert into Owners
    INSERT INTO Owners (id, agency, account)
    VALUES (@owner_id, @bank_agency, @bank_account);

    -- Create the property
    INSERT INTO Properties (owner_id, description, value, status)
    VALUES (@owner_id, @property_desc, @property_value, @property_status);
END;
GO

-- Example Usage
EXEC CreateOwnerAndProperty
    @owner_name = 'Lucas Silva',
    @owner_cpf = '321.654.987-00',
    @owner_status = 1,
    @bank_agency = 2222,
    @bank_account = 556677,
    @property_desc = 'Duplex apartment downtown',
    @property_value = 3500.00;

-- Procedure: Register Rented Property
CREATE PROCEDURE RegisterRentedProperty
    @property_id        INT,
    @tenant_name        VARCHAR(50),
    @tenant_cpf         VARCHAR(15),
    @tenant_status      INT = 1,
    @tenant_income      DECIMAL(10,2),
    @rental_date        DATE = NULL
AS
BEGIN
    DECLARE @tenant_id INT;

    -- Check if tenant already exists
    SELECT @tenant_id = id FROM People WHERE cpf = @tenant_cpf;

    -- If not, insert into People and Tenants
    IF @tenant_id IS NULL
    BEGIN
        INSERT INTO People (name, cpf, status)
        VALUES (@tenant_name, @tenant_cpf, @tenant_status);

        SET @tenant_id = SCOPE_IDENTITY();

        INSERT INTO Tenants (id, income)
        VALUES (@tenant_id, @tenant_income);
    END

    -- Update the property to assign the tenant
    UPDATE Properties
    SET 
        tenant_id = @tenant_id,
        rental_date = @rental_date,
        status = 1
    WHERE id = @property_id;
END;
GO

-- Example Usage
EXEC RegisterRentedProperty 
    @property_id = 3,
    @tenant_name = 'Alice Martins',
    @tenant_cpf = '123.456.789-99',
    @tenant_status = 1,
    @tenant_income = 2000.00,
    @rental_date = '2025-06-01';

-- Procedure: Update Rent Value (With History)
CREATE PROCEDURE UpdatePropertyValue
    @property_id    INT,
    @new_value      MONEY
AS
BEGIN
    DECLARE @old_value MONEY;

    SELECT @old_value = value FROM Properties WHERE id = @property_id;

    IF @old_value IS NOT NULL AND @old_value <> @new_value
    BEGIN
        -- Update property value
        UPDATE Properties
        SET value = @new_value
        WHERE id = @property_id;

        -- Insert into history manually (even if trigger also exists)
        INSERT INTO RentAdjustmentHistory (property_id, new_value)
        VALUES (@property_id, @new_value);
    END
END;
GO

-- Example Usage
EXEC UpdatePropertyValue 
    @property_id = 3,
    @new_value = 3200.00;