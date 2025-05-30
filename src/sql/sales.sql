-- Create database
CREATE DATABASE SalesDB;
GO

-- Use the database
USE SalesDB;
GO

-- Create 'People' table
CREATE TABLE People
(
    personId INT NOT NULL IDENTITY PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cpf VARCHAR(12) NOT NULL UNIQUE,
    status INT,
    CHECK (status IN(1, 2, 3, 4))  -- Status check: 1=Active, 2=Inactive, 3=Suspended, 4=Terminated
);
GO

-- Create 'Clients' table
CREATE TABLE Clients
(
    personId INT NOT NULL PRIMARY KEY,
    income DECIMAL(10, 2) NOT NULL DEFAULT 0,
    credit DECIMAL(10, 2) DEFAULT 0,
    FOREIGN KEY (personId) REFERENCES People(personId),
    CHECK (income > 0),
    CHECK (credit >= 0)
);
GO

-- Create 'Interns' table
CREATE TABLE Interns
(
    personId INT NOT NULL PRIMARY KEY,
    scholarship DECIMAL(10, 2),
    FOREIGN KEY (personId) REFERENCES People(personId),
    CHECK (scholarship >= 0)
);
GO

-- Create 'Employees' table
CREATE TABLE Employees
(
    personId INT NOT NULL PRIMARY KEY,
    salary DECIMAL(10, 2) NOT NULL,
    supervisorId INT,  -- ID of the supervisor
    FOREIGN KEY (personId) REFERENCES People(personId),
    FOREIGN KEY (supervisorId) REFERENCES Employees(personId),
    CHECK (salary > 0)
);
GO

-- Create 'Products' table
CREATE TABLE Products
(
    productId INT NOT NULL IDENTITY PRIMARY KEY,
    description VARCHAR(50) NOT NULL,
    quantity INT,
    price DECIMAL(10, 2),
    status INT,
    CHECK (status IN(1, 2, 3, 4))  -- Status check: 1=Available, 2=Out of Stock, 3=Discontinued, 4=Archived
);
GO

-- Create 'Orders' table
CREATE TABLE Orders
(
    orderId INT NOT NULL IDENTITY PRIMARY KEY,
    orderDate DATETIME NOT NULL,
    value DECIMAL(10, 2) CHECK (value > 0),
    status INT CHECK (status IN(1, 2, 3, 4)),
    clientId INT NOT NULL,
    employeeId INT NOT NULL,
    internId INT,
    FOREIGN KEY (clientId) REFERENCES Clients(personId),
    FOREIGN KEY (employeeId) REFERENCES Employees(personId),
    FOREIGN KEY (internId) REFERENCES Interns(personId)
);
GO

-- Create 'OrderItems' table (to relate products to orders)
CREATE TABLE OrderItems
(
    orderId INT NOT NULL,
    productId INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (orderId, productId),  -- Composite key that relates items to orders and products
    FOREIGN KEY (orderId) REFERENCES Orders(orderId),
    FOREIGN KEY (productId) REFERENCES Products(productId)
);
GO

-- Data Manipulation Language (DML) - Inserting records

-- Insert sample products into 'Products' table
INSERT INTO Products (description, quantity, price, status)
VALUES
    ('Pencil', 100, 0.8, 1),
    ('Sharpener', 100, 2.5, 1),
    ('Pen', 100, 1.2, 1),
    ('Notebook', 100, 4.5, 1),
    ('Eraser', 100, 0.9, 1);
GO

-- Insert sample people into 'People' table
INSERT INTO People (name, cpf, status)
VALUES
    ('Batman', '33333333333', 1),
    ('Superman', '11111111111', 1),
    ('Spiderman', '22222222222', 1),
    ('Wonder Woman', '44444444444', 1),
    ('Iron Man', '55555555555', 1),
    ('Super Girl', '66666666666', 1),
    ('Thor', '99999999999', 1),
    ('Aquaman', '12345678988', 1),
    ('Flash', '87898956512', 1);
GO

-- Insert sample clients into 'Clients' table
INSERT INTO Clients (personId, income, credit)
VALUES
    (1, 10000, 3000),
    (2, 15000, 5000),
    (9, 8000, 2000);
GO

-- Insert sample employees into 'Employees' table
INSERT INTO Employees (personId, salary, supervisorId)
VALUES
    (4, 2500, NULL),
    (6, 1000, 4),
    (7, 4500, NULL),
    (8, 1500, 7);
GO

-- Insert sample interns into 'Interns' table
INSERT INTO Interns (personId, scholarship)
VALUES
    (3, 800),
    (5, 500);
GO

-- Insert sample orders into 'Orders' table
INSERT INTO Orders (orderDate, value, status, clientId, employeeId, internId)
VALUES
    (GETDATE(), 100, 1, 1, 6, 3),
    (GETDATE(), 150, 2, 2, 8, 5),
    (GETDATE(), 120, 1, 6, 3, 3);
GO

-- Insert sample order items into 'OrderItems' table
INSERT INTO OrderItems (orderId, productId, quantity, price)
VALUES
    (1, 1, 10, 0.8),
    (1, 2, 10, 2.5),
    (1, 3, 10, 1.2),
    (1, 4, 10, 4.5),
    (1, 5, 10, 0.9);
GO

-- Create a simple view to query all products from the 'Products' table
CREATE VIEW v_products AS
    SELECT * FROM Products;
GO

-- Create a more advanced view with custom column names and values
CREATE VIEW v_products_detailed AS
    SELECT 
        Pr.productId AS ProductCode,
        Pr.description AS ProductDescription,
        Pr.quantity AS Stock,
        Pr.price AS 'Unit Price',
        CASE 
            WHEN Pr.status = 1 THEN 'Active'
            WHEN Pr.status = 2 THEN 'Out of Stock'
            ELSE 'Other' 
        END AS Status
    FROM Products Pr;
GO

-- Select from the view
SELECT * FROM v_products_detailed;
GO

-- Update product prices by 5% using the view
UPDATE v_products_detailed
SET [Unit Price] = [Unit Price] * 1.05;
GO

-- Select all records from 'Products' table after price update
SELECT * FROM Products;
GO

-- Create a view to query all clients and their information
CREATE VIEW v_clients AS
    SELECT 
        P.personId AS ClientID, 
        P.name AS ClientName,
        C.credit AS Credit,
        C.income AS Income,
        CASE 
            WHEN P.status = 1 THEN 'Active'
            WHEN P.status = 2 THEN 'Inactive'
            ELSE 'Other'
        END AS ClientStatus
    FROM People P
    JOIN Clients C ON P.personId = C.personId;
GO

-- Select from the 'v_clients' view
SELECT * FROM v_clients;
GO

-- Create a procedure to add a new client, including inserting the person first
CREATE PROCEDURE sp_addClient
(
    @name VARCHAR(50),
    @cpf VARCHAR(12),
    @status INT,
    @income DECIMAL(10, 2)
)
AS
BEGIN
    -- Insert person
    INSERT INTO People (name, cpf, status)
    VALUES (@name, @cpf, @status);

    -- Insert client (use @@IDENTITY to reference the last inserted 'personId')
    INSERT INTO Clients (personId, income, credit)
    VALUES (@@IDENTITY, @income, @income * 0.25);
END;
GO

-- Call the procedure to add a new client
EXEC sp_addClient 'Robin', '25263641478', 1, 3500;
GO
