USE company_db;

INSERT INTO departments (departmentName) VALUES ("Finance");
INSERT INTO departments (departmentName) VALUES ("IT");
INSERT INTO departments (departmentName) VALUES ("HR");
INSERT INTO departments (departmentName) VALUES ("Sales");
INSERT INTO departments (departmentName) VALUES ("Software Engineering");
INSERT INTO departments (departmentName) VALUES ("Services");

INSERT INTO employees(firstName, lastName, roleId) 
VALUES 
("Bob", "Smith", 1), 
("Alice", "Smith", 3), 
("Ali", "Smith", 5), 
("Matt", "Smith", 7),
("Amy", "Smith", 10),
("John", "Smith", 12);
("Alex", "Black", 2, 1), 
("Max", "Black", 4, 3), 
("Jimmy", "Black", 6, 5),
("Brett", "Black", 8, 7), 
("Jack", "Black", 9, 7),
("Keri", "Black", 9, 7);

INSERT INTO roles(title, salary, depId) 

VALUES ("CEO", 150000, 1), 
("CFO", 500000, 1), 
("Sales Exec", 35000, 2), 
("Engineer", 100000, 3), 
("IT Technician", 50000, 3), 
("Operations Director", 100000, 4), 
("Team Leader", 60000, 4), 
("HR Director", 100000, 5), 