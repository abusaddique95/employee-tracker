require("dotenv").config();

const inquirer = require("inquirer");

const initDatabase = require("../utils/config");
const {
  addDepartment,
  addEmployees,
  addRole,
  questions,
} = require("../utils/questions");

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
      console.log(departments);
    }
    // if the user selects quit, change inProgress to false
  }
};
init();
