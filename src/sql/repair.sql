-- DATABASE: REPAIR_DB

CREATE DATABASE RepairDB;
GO

USE RepairDB;
GO

-- Create tables

CREATE TABLE People (
    id INT NOT NULL PRIMARY KEY IDENTITY,
    name VARCHAR(50) NOT NULL,
    cpf VARCHAR(12) NOT NULL,
    status INT CHECK (status IN (1, 2, 3, 4)) -- Status values: 1 = Active, 2 = Inactive, 3 = Suspended, 4 = Deleted
);
GO

CREATE TABLE Clients (
    person_id INT NOT NULL PRIMARY KEY REFERENCES People,
    phone VARCHAR(20) NOT NULL
);
GO

CREATE TABLE Attendants (
    person_id INT NOT NULL PRIMARY KEY REFERENCES People,
    salary DECIMAL(10, 2) NOT NULL
);
GO

CREATE TABLE WorkOrders (
    number INT NOT NULL PRIMARY KEY IDENTITY,
    date DATETIME NOT NULL,
    total DECIMAL(10, 2),
    status INT NOT NULL, -- Status: 1 = Pending, 2 = In Progress, 3 = Completed, 4 = Canceled
    client_id INT NOT NULL REFERENCES Clients,
    attendant_id INT NOT NULL REFERENCES Attendants
);
GO

CREATE TABLE Categories (
    id INT NOT NULL PRIMARY KEY IDENTITY,
    description VARCHAR(50) NOT NULL,
    status INT -- Status: 1 = Active, 2 = Inactive
);
GO

CREATE TABLE Repairs (
    code INT NOT NULL PRIMARY KEY IDENTITY,
    name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT NOT NULL REFERENCES Categories,
    status INT NOT NULL -- Status: 1 = Available, 2 = Unavailable
);
GO

CREATE TABLE WorkOrderRepairs (
    workorder_number INT NOT NULL REFERENCES WorkOrders,
    repair_code INT NOT NULL REFERENCES Repairs,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (workorder_number, repair_code)
);
GO

-- 1) Create a view to show all Work Orders with details: number, date, total, status, client name, and attendant name
CREATE VIEW WorkOrderDetails AS
    SELECT WO.number, WO.date, WO.total,
        (SELECT name FROM People WHERE id = WO.client_id) AS Client,
        (SELECT name FROM People WHERE id = WO.attendant_id) AS Attendant,
        CASE WO.status
            WHEN 1 THEN 'Pending'
            WHEN 2 THEN 'In Progress'
            WHEN 3 THEN 'Completed'
            ELSE 'Canceled'
        END AS Status
    FROM WorkOrders WO;
GO

-- Test the view
SELECT * FROM WorkOrderDetails;
GO

-- 2) Scalar function to calculate the total of a Work Order
CREATE FUNCTION CalculateWorkOrderTotal (@workorder_number INT)
RETURNS DECIMAL(10, 2)
AS
BEGIN
    DECLARE @total DECIMAL(10, 2);
    SELECT @total = SUM(quantity * price)
    FROM WorkOrderRepairs
    WHERE workorder_number = @workorder_number;
    RETURN @total;
END;
GO

-- Test the function
SELECT dbo.CalculateWorkOrderTotal(1) AS TotalForWorkOrder1;
GO

-- 3) Stored Procedure to change the price of a repair
CREATE PROCEDURE UpdateRepairPrice 
(
    @repair_code INT, 
    @new_price DECIMAL(10, 2)
)
AS
BEGIN
    UPDATE Repairs
    SET price = @new_price
    WHERE code = @repair_code;
    
    IF @@ERROR <> 0
    BEGIN
        RETURN 1 -- Failure
    END
    ELSE
    BEGIN
        RETURN 0 -- Success
    END
END;
GO

-- Test the stored procedure
EXEC UpdateRepairPrice @repair_code = 1, @new_price = 150;
GO

-- 4) Stored Procedure for registering an attendant (with inserts into both People and Attendants tables)
CREATE PROCEDURE RegisterAttendant
    @name VARCHAR(50),
    @cpf VARCHAR(12),
    @status INT,
    @attendant_id INT,
    @salary DECIMAL(10, 2)
AS
BEGIN
    INSERT INTO People (name, cpf, status) 
    VALUES (@name, @cpf, @status);

    INSERT INTO Attendants (person_id, salary)
    VALUES (@attendant_id, @salary);
END;
GO

-- Test the stored procedure
EXEC RegisterAttendant @name = 'Luisa Silva', @cpf = '436789765-32', @status = 1, @attendant_id = 7, @salary = 10000;
GO

-- 5) Trigger to log salary history changes for attendants
CREATE TABLE SalaryHistory (
    id INT NOT NULL IDENTITY,
    date DATETIME NOT NULL,
    attendant_id INT NOT NULL,
    old_salary DECIMAL(10, 2) NOT NULL,
    new_salary DECIMAL(10, 2) NOT NULL,
    user VARCHAR(50) NOT NULL,
    PRIMARY KEY (id, date)
);
GO

CREATE TRIGGER LogSalaryChange
ON Attendants
AFTER UPDATE
AS
BEGIN
    INSERT INTO SalaryHistory (date, attendant_id, old_salary, new_salary, user)
    SELECT GETDATE(), D.person_id, D.salary, I.salary, SYSTEM_USER
    FROM deleted D
    JOIN inserted I ON D.person_id = I.person_id;
END;
GO

-- Test the trigger by updating an attendant's salary
UPDATE Attendants 
SET salary = 2000 
WHERE person_id = 1;
GO

-- View the salary history
SELECT * FROM SalaryHistory;
GO

-- 6) Trigger to prevent the physical deletion of a category. Instead, it sets its status to 3 (Inactive).
CREATE TRIGGER PreventCategoryDeletion
ON Categories
INSTEAD OF DELETE
AS
BEGIN
    UPDATE Categories
    SET status = 3
    WHERE id IN (SELECT id FROM deleted);
END;
GO

-- Test the trigger by attempting to delete a category
DELETE FROM Categories WHERE id = 1;
GO

SELECT * FROM Categories;
GO

-- 7) Trigger to log repairs to a different table (Copia_Reparos) instead of deleting them
CREATE TABLE RepairBackup (
    code INT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT NOT NULL REFERENCES Categories,
    status INT NOT NULL,
    date DATETIME NOT NULL,
    user VARCHAR(50) NOT NULL
);
GO

CREATE TRIGGER LogRepairInsert
ON Repairs
AFTER INSERT
AS
BEGIN
    INSERT INTO RepairBackup
    SELECT code, name, price, category_id, status, GETDATE(), SYSTEM_USER
    FROM inserted;
END;
GO

-- Test the trigger by inserting a new repair
INSERT INTO Repairs (name, price, category_id, status) 
VALUES ('Plumbing', 300, 2, 1);
GO

-- View the original repairs and the backup table
SELECT * FROM Repairs;
GO

SELECT * FROM RepairBackup;
GO
