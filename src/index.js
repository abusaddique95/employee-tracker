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
      console.table(departments);
    }
    if (selection === "View all roles") {
      const roles = await executeQuery("SELECT * FROM roles");
      console.table(roles);
    }
    if (selection === "viewAllEmployees") {
      const employees = await executeQuery(`SELECT e.id,
      CONCAT(e.first_name,' ',
             e.last_name) AS employee,
             r.salary, r.title,
             d.department_name,
            CONCAT(m.first_name,' ',
             m.last_name) AS manager
      FROM employees AS e
        LEFT JOIN employees AS m 
        ON e.manager_id = m.id INNER JOIN roles r ON e.role_id = r.id LEFT JOIN departments d ON r.department_id = d.id
        ORDER BY e.last_name;
      `);
      console.table(employees);
    }
  }
};
init();
