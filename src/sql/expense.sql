-- DATABASE: ExpenseDB

CREATE DATABASE ExpenseDB;
GO

USE ExpenseDB;
GO

-- Create tables

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role VARCHAR(50) DEFAULT 'employee'
);

CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE Vendors (
    vendor_id INT AUTO_INCREMENT PRIMARY KEY,
    vendor_name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255)
);

CREATE TABLE Expenses (
    expense_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    category_id INT,
    vendor_id INT,
    amount DECIMAL(10, 2),
    expense_date DATE,
    payment_method VARCHAR(50),
    description TEXT,
    receipt_image VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id),
    FOREIGN KEY (vendor_id) REFERENCES Vendors(vendor_id)
);

CREATE TABLE Payment_Methods (
    payment_method_id INT AUTO_INCREMENT PRIMARY KEY,
    payment_method_name VARCHAR(255) NOT NULL
);

CREATE TABLE Budgets (
    budget_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    category_id INT,
    budget_amount DECIMAL(10, 2),
    budget_start_date DATE,
    budget_end_date DATE,
    remaining_budget DECIMAL(10, 2),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

-- Add index on user_id in Expenses (frequent lookup on user-related expenses)
CREATE INDEX idx_expenses_user_id ON Expenses(user_id);

-- Add index on category_id in Expenses (frequent lookup by category)
CREATE INDEX idx_expenses_category_id ON Expenses(category_id);

-- Add index on vendor_id in Expenses (frequent lookup by vendor)
CREATE INDEX idx_expenses_vendor_id ON Expenses(vendor_id);

-- Add index on expense_date in Expenses (frequent filtering by date)
CREATE INDEX idx_expenses_expense_date ON Expenses(expense_date);

-- Add index on category_id in Budgets (frequent lookup by category in budgets)
CREATE INDEX idx_budgets_category_id ON Budgets(category_id);

-- Add index on user_id in Budgets (frequent lookup by user in budgets)
CREATE INDEX idx_budgets_user_id ON Budgets(user_id);

-- View for Expenses Summary
CREATE VIEW ExpenseSummary AS
SELECT 
    e.user_id,
    u.username,
    c.category_name,
    v.vendor_name,
    SUM(e.amount) AS total_expense
FROM Expenses e
JOIN Users u ON e.user_id = u.user_id
JOIN Categories c ON e.category_id = c.category_id
LEFT JOIN Vendors v ON e.vendor_id = v.vendor_id
GROUP BY e.user_id, c.category_name, v.vendor_name;

-- Function to Calculate Remaining Budget
DELIMITER //

CREATE FUNCTION GetRemainingBudget(user_id INT, category_id INT)
RETURNS DECIMAL(10,2)
BEGIN
    DECLARE total_expense DECIMAL(10,2);
    DECLARE budget_amount DECIMAL(10,2);
    DECLARE remaining_budget DECIMAL(10,2);

    -- Get total expenses for the user in the specified category
    SELECT SUM(amount) INTO total_expense
    FROM Expenses
    WHERE user_id = user_id AND category_id = category_id;

    -- Get the budget amount for the user in the specified category
    SELECT budget_amount INTO budget_amount
    FROM Budgets
    WHERE user_id = user_id AND category_id = category_id;

    -- Calculate remaining budget
    SET remaining_budget = budget_amount - IFNULL(total_expense, 0);

    RETURN remaining_budget;
END //

DELIMITER ;

-- Procedure to Insert an Expense and Update the Budget
DELIMITER //

CREATE PROCEDURE InsertExpenseAndUpdateBudget(
    IN p_user_id INT,
    IN p_category_id INT,
    IN p_vendor_id INT,
    IN p_amount DECIMAL(10,2),
    IN p_expense_date DATE,
    IN p_payment_method VARCHAR(50),
    IN p_description TEXT
)
BEGIN
    DECLARE remaining_budget DECIMAL(10, 2);

    -- Insert the new expense
    INSERT INTO Expenses (user_id, category_id, vendor_id, amount, expense_date, payment_method, description)
    VALUES (p_user_id, p_category_id, p_vendor_id, p_amount, p_expense_date, p_payment_method, p_description);

    -- Get the remaining budget for the user in the specified category
    SET remaining_budget = GetRemainingBudget(p_user_id, p_category_id);

    -- If the remaining budget is less than 0, update the budget table (you can set a threshold for warning)
    IF remaining_budget < 0 THEN
        UPDATE Budgets
        SET remaining_budget = remaining_budget
        WHERE user_id = p_user_id AND category_id = p_category_id;
    END IF;
    
END //

DELIMITER ;

-- Trigger to Update Budget After Expense Inserted
DELIMITER //

CREATE TRIGGER UpdateBudgetAfterExpenseInsert
AFTER INSERT ON Expenses
FOR EACH ROW
BEGIN
    DECLARE remaining_budget DECIMAL(10, 2);

    -- Get the remaining budget for the user in the category of the new expense
    SET remaining_budget = GetRemainingBudget(NEW.user_id, NEW.category_id);

    -- Update the remaining budget in the Budgets table
    UPDATE Budgets
    SET remaining_budget = remaining_budget
    WHERE user_id = NEW.user_id AND category_id = NEW.category_id;
END //

DELIMITER ;

-- Trigger to Update Budget After Expense Deleted
DELIMITER //

CREATE TRIGGER UpdateBudgetAfterExpenseDelete
AFTER DELETE ON Expenses
FOR EACH ROW
BEGIN
    DECLARE remaining_budget DECIMAL(10, 2);

    -- Get the remaining budget for the user in the category of the deleted expense
    SET remaining_budget = GetRemainingBudget(OLD.user_id, OLD.category_id);

    -- Update the remaining budget in the Budgets table
    UPDATE Budgets
    SET remaining_budget = remaining_budget
    WHERE user_id = OLD.user_id AND category_id = OLD.category_id;
END //

DELIMITER ;

-- Insert a New Expense
INSERT INTO Expenses (user_id, category_id, vendor_id, amount, expense_date, payment_method, description)
VALUES (1, 2, 5, 150.00, '2022-05-25', 'Credit Card', 'Office supplies purchase');

-- View All Expenses for a User
SELECT e.expense_id, e.amount, e.expense_date, c.category_name, v.vendor_name, e.payment_method, e.description
FROM Expenses e
JOIN Categories c ON e.category_id = c.category_id
LEFT JOIN Vendors v ON e.vendor_id = v.vendor_id
WHERE e.user_id = 1
ORDER BY e.expense_date DESC;

-- Get Total Expenses for a User by Category
SELECT c.category_name, SUM(e.amount) AS total_expense
FROM Expenses e
JOIN Categories c ON e.category_id = c.category_id
WHERE e.user_id = 1
GROUP BY c.category_name;

-- Get Expenses for a Specific Date Range
SELECT e.expense_id, e.amount, e.expense_date, c.category_name, e.payment_method
FROM Expenses e
JOIN Categories c ON e.category_id = c.category_id
WHERE e.user_id = 1
AND e.expense_date BETWEEN '2022-01-01' AND '2022-05-01'
ORDER BY e.expense_date DESC;

-- Get the Total Expenses for a Specific Period
SELECT SUM(amount) AS total_expenses
FROM Expenses
WHERE user_id = 1
AND expense_date BETWEEN '2022-01-01' AND '2022-05-01';

-- Get the Remaining Budget for a User in a Category
SELECT b.category_id, c.category_name, b.budget_amount, SUM(e.amount) AS total_expense,
       (b.budget_amount - SUM(e.amount)) AS remaining_budget
FROM Budgets b
JOIN Categories c ON b.category_id = c.category_id
LEFT JOIN Expenses e ON b.category_id = e.category_id AND e.user_id = b.user_id
WHERE b.user_id = 1
GROUP BY b.category_id, c.category_name, b.budget_amount;

-- Update a Budget's Remaining Budget
UPDATE Budgets
SET remaining_budget = budget_amount - (SELECT SUM(amount) FROM Expenses WHERE category_id = Budgets.category_id AND user_id = Budgets.user_id)
WHERE user_id = 1;

-- Get the Most Expensive Vendor for a User
SELECT v.vendor_name, SUM(e.amount) AS total_spent
FROM Expenses e
JOIN Vendors v ON e.vendor_id = v.vendor_id
WHERE e.user_id = 1
GROUP BY v.vendor_name
ORDER BY total_spent DESC
LIMIT 1;
