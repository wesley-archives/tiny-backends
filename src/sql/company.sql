-- DATABASE: COMPANYDB

CREATE DATABASE CompanyDB;
GO

USE CompanyDB;
GO

-- Create Departments Table
CREATE TABLE Departments (
    department_id INT PRIMARY KEY IDENTITY,
    department_name VARCHAR(50) NOT NULL
);
GO

-- Insert Sample Departments
INSERT INTO Departments (department_name)
VALUES ('HR'),
       ('Marketing'),
       ('Sales'),
       ('Purchasing'),
       ('Accounts Payable'),
       ('Accounts Receivable');
GO

-- Create Employees Table
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY IDENTITY,
    employee_name VARCHAR(50) NOT NULL,
    department_id INT REFERENCES Departments(department_id)
);
GO

-- Insert Sample Employees
INSERT INTO Employees (employee_name, department_id)
VALUES ('Valeria', 3),
       ('Ricardo', NULL),
       ('Maria Antonia', 1),
       ('Cleonice', 2),
       ('Miguel', 1),
       ('Walter', 6),
       ('Andre', NULL);
GO

-- Create a View for Employee and Department Information
CREATE VIEW EmployeeDepartmentInfo AS
SELECT e.employee_id AS "Employee ID", 
       e.employee_name AS "Employee", 
       d.department_id AS "Department ID", 
       d.department_name AS "Department"
FROM Employees e
LEFT JOIN Departments d ON e.department_id = d.department_id;
GO

-- Select Data from the View
SELECT * FROM EmployeeDepartmentInfo;
GO

-- Create a Function to Get the Total Number of Employees in a Department
CREATE FUNCTION GetTotalEmployeesInDepartment (@department_id INT)
RETURNS INT
AS
BEGIN
    DECLARE @total INT;
    SELECT @total = COUNT(*) 
    FROM Employees
    WHERE department_id = @department_id;
    RETURN @total;
END;
GO

-- Example Usage of the Function
SELECT dbo.GetTotalEmployeesInDepartment(1) AS "Total Employees in HR";
GO

-- Create a Stored Procedure to Add a New Employee
CREATE PROCEDURE AddEmployee (
    @employee_name VARCHAR(50),
    @department_id INT
)
AS
BEGIN
    INSERT INTO Employees (employee_name, department_id)
    VALUES (@employee_name, @department_id);
END;
GO

-- Call the Stored Procedure to Add a New Employee
EXEC AddEmployee @employee_name = 'John Doe', @department_id = 2;
GO

-- Create a Trigger to Prevent Deletion of a Department with Employees
CREATE TRIGGER PreventDepartmentDeletion
ON Departments
INSTEAD OF DELETE
AS
BEGIN
    DECLARE @department_id INT;
    SELECT @department_id = department_id FROM DELETED;
    
    IF EXISTS (SELECT 1 FROM Employees WHERE department_id = @department_id)
    BEGIN
        PRINT 'Cannot delete department with employees!';
    END
    ELSE
    BEGIN
        DELETE FROM Departments WHERE department_id = @department_id;
    END
END;
GO

-- Try to Delete a Department (It will fail if there are employees in the department)
DELETE FROM Departments WHERE department_id = 1;
GO

-- Create an UPDATE Trigger to Log Changes to Employee Data
CREATE TRIGGER LogEmployeeUpdate
ON Employees
FOR UPDATE
AS
BEGIN
    DECLARE @employee_id INT, @old_name VARCHAR(50), @new_name VARCHAR(50);
    
    SELECT @employee_id = employee_id, @old_name = employee_name FROM DELETED;
    SELECT @new_name = employee_name FROM INSERTED;
    
    PRINT 'Employee ' + CAST(@employee_id AS VARCHAR) + ' updated: ' + @old_name + ' -> ' + @new_name;
END;
GO

-- Update an Employee's Name (Will trigger the log)
UPDATE Employees SET employee_name = 'Valeria Smith' WHERE employee_id = 1;
GO
