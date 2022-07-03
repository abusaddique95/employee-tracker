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
    if (selection === "view all employees") {
      // const employees = await executeQuery(`SELECT * FROM employees`);
      // console.table(employees);
      const query = "SELECT * FROM employees";
      const data = await executeQuery(query);
      console.table(data);
    }
    if (selection === "addDepartment") {
      const addQuery = await inquirer.prompt(addDepartment);
      const query = `INSERT INTO departments (name) VALUES ("${addQuery.name}")`;
      await executeQuery(query);
      console.log("new department created");
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
