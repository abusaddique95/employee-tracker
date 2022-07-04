require("dotenv").config();

const inquirer = require("inquirer");

const initDatabase = require("../utils/config");
const {
  addDepartment,
  addEmployees,
  addRole,
  questions,
} = require("../utils/questions");

const {
  addNewDepartment,
  addNewEmployee,
  addNewRole,
} = require("../utils/add");

const { getDepartments, getRoles, getEmployees } = require("../utils/utils");

// frameworks
const mysql = require("mysql2/promise");
const path = require("path");
// const dbConfig = require("../utils/config");

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
      const roles = await executeQuery("SELECT * FROM roles");
      console.table(roles);
    }
    if (selection === "View all employees") {
      // const employees = await executeQuery(`SELECT * FROM employees`);
      // console.table(employees);
      // const query = `SELECT  *
      // FROM employees`;
      const query = `SELECT  employees.id, firstName, lastName, title, salary, departments.name
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
      const queryOne = `SELECT * FROM departments;`;
      const result = await executeQuery(queryOne);

      const arr = result.map((department) => ({
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
          choices: arr,
        },
      ]);

      console.log(answer);
      const addingRole = `INSERT INTO roles (title, salary, departmentId) VALUES ("${answer.newTitle}", "${answer.newSalary}", "${answer.deptId}")`;
      await executeQuery(addingRole);
    }

    // if (selection === "addEmployees") {

    //   const roleQuery = "SELECT * FROM roles";
    //   const allRoles = await executeQuery(roleQuery);

    //   const employee = "SELECT * FROM employees";
    //   const employees = await executeQuery(employee);

    //   const department = employees.map((employees) => {

    //   }
    //   )
  }
};
init();
