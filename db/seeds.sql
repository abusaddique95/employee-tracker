USE company_db;

INSERT INTO departments (name) VALUES 
("Finance"),
("IT"),
("HR"),
("Sales"),
("Software Engineering"),
("Services");

INSERT INTO roles(title, salary, departmentId) VALUES
("CEO", 150000, 1), 
("CFO", 500000, 1), 
("Sales Exec", 35000, 2), 
("Engineer", 100000, 3),
("IT Technician", 50000, 3), 
("Operations Director", 100000, 4), 
("Team Leader", 60000, 4), 
("HR Director", 100000, 5);

INSERT INTO employees(firstName, lastName, roleId, managerId) 
VALUES 
("Bob", "Smith", 1, NULL), 
("Alice", "Smith", 3, NULL), 
("Ali", "Smith", 5, NULL), 
("Matt", "Smith", 7, NULL),
("Amy", "Smith", 8, NULL),
("John", "Smith", 8, NULL),
("Alex", "Black", 2, NULL), 
("Max", "Black", 4, NULL), 
("Jimmy", "Black", 6, NULL),
("Brett", "Black", 8, NULL), 
("Jack", "Black", 7, NULL),
("Keri", "Black", 7, NULL);

UPDATE employees SET managerId = '1' WHERE (id='7');
UPDATE employees SET managerId = '3' WHERE (id='8');
UPDATE employees SET managerId = '5' WHERE (id='9');
UPDATE employees SET managerId = '7' WHERE (id='10');
UPDATE employees SET managerId = '7' WHERE (id='11');
UPDATE employees SET managerId = '7' WHERE (id='12');