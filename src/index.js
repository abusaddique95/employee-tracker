// frameworks
require("dotenv").config();
const mysql = require("mysql2/promise");
const path = require("path");
const inquirer = require("inquirer");

const initDatabase = require("../utils/config");
const {
  addDepartment,
  addEmployees,
  addRole,
  questions,
} = require("../utils/questions");

// while loop to ask questions
const init = async () => {
  const { executeQuery, closeConnection } = await initDatabase({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  let inProgress = true;

  while (inProgress) {
    const { selection } = await inquirer.prompt(questions);

    if (selection === "View all departments") {
      const departments = await executeQuery("SELECT * FROM departments");
      console.table(departments);
    }

    if (selection === "View all roles") {
      const roles = await executeQuery(
        "SELECT roles.id, roles.title, roles.salary, departments.name AS department FROM roles INNER JOIN departments ON roles.departmentId=departments.id"
      );
      console.table(roles);
    }

    if (selection === "View all employees") {
      const query = `SELECT employees.id, firstName, lastName, title AS role, salary, departments.name AS department
        FROM employees
        INNER JOIN roles
        ON employees.roleId=roles.id
        LEFT JOIN departments
        ON roles.departmentId = departments.id`;

      const data = await executeQuery(query);
      console.table(data);
    }

    if (selection === "Add a department") {
      const addQuery = await inquirer.prompt(addDepartment);
      const query = `INSERT INTO departments (name) VALUES ("${addQuery.departmentName}")`;
      await executeQuery(query);
      console.log("new department created");
    }

    if (selection === "Add a role") {
      const departments = await executeQuery(`SELECT * FROM departments;`);

      const departmentChoices = departments.map((department) => ({
        name: department.name,
        value: department.id,
      }));

      const answer = await inquirer.prompt([
        {
          type: "input",
          name: "newTitle",
          message: "What is this role's title?",
        },
        {
          type: "input",
          name: "newSalary",
          message: "What is this role's salary?",
        },
        {
          type: "list",
          name: "deptId",
          message: "What is this role's department that it is associated with?",
          choices: departmentChoices,
        },
      ]);

      const addingRole = `INSERT INTO roles (title, salary, departmentId) VALUES ("${answer.newTitle}", "${answer.newSalary}", "${answer.deptId}")`;
      await executeQuery(addingRole);

      console.log("new role created");
    }

    if (selection === "Add an employee") {
      const roles = await executeQuery("SELECT * FROM roles");

      const roleChoices = roles.map((roles) => ({
        name: roles.title,
        value: roles.id,
      }));

      const employees = await executeQuery("SELECT * FROM employees");

      const employeeChoices = employees.map((employee) => ({
        name: `${employee.firstName} ${employee.lastName}`,
        value: employee.id,
      }));

      const answer = await inquirer.prompt([
        {
          type: "input",
          message: "please enter employees first name",
          name: "firstName",
        },
        {
          type: "input",
          message: "please enter employees last name",
          name: "lastName",
        },
        {
          type: "list",
          message: "what is the employees role?",
          name: "roleId",
          choices: roleChoices,
        },
        {
          type: "list",
          message: "Please choose manager",
          name: "managerId",
          choices: employeeChoices,
        },
      ]);

      const addingRole = `INSERT INTO employees (firstName, lastName, roleId, managerId ) VALUES ("${answer.firstName}", "${answer.lastName}", "${answer.roleId}", "${answer.managerId}")`;
      await executeQuery(addingRole);

      console.log("created new employee");
    }

    if (selection === "Quit") {
      inProgress = false;
      process.exit(0);
    }
  }
};

init();
