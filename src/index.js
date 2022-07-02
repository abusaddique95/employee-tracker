const {
  addDepartment,
  addEmployees,
  addRole,
  questions,
} = require("../utils/questions");
const { getDepartments, getRoles, getEmployees } = require("../utils/utils");
// const { dbConfig } = require("../utils/config")

// frameworks
require("dotenv").config();
const mysql = require("mysql2");
const inquirer = require("inquirer");
const path = require("path");

// while loop to ask questions
const init = async () => {
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };

  const db = await mysql.createConnection(dbConfig);

  let inProgress = true;

  while (inProgress) {
    const answers = await inquirer.prompt(questions);
    console.log("answers: " + JSON.stringify(answers.category));
    if (answers.category == "View all departments") {
      // run the query and get all the departments
      //const getDepartments = async (db) => {
      const departments = db.query(
        `INSERT INTO departments (departmentName) VALUES ("${departmentAnswers.name}")`
      );
      //console.log("data: " + departments);
      console.table(departments);
      //};
      //getDepartments(db);
    }
    // if the user selects quit, change inProgress to false
  }
};

init();
