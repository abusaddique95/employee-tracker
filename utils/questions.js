const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    message: "Please select a category:",
    name: "category",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee's role",
      "Update an employee's manager",
      "Quit",
    ],
  },
];

const addDepartment = [
  {
    type: "input",
    message: "please enter the department Name",
    name: "departmentName",
  },
];

const addEmployees = [
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
    type: "input",
    message: "Please enter managers name",
    name: "managerName",
  },
  {
    type: "input",
    message: "what is the employees role?",
    name: "role",
  },
];
const addRole = [
  {
    type: "input",
    message: "please enter the role name",
    name: "roleName",
  },
];

module.exports = {
  addDepartment,
  addEmployees,
  addRole,
  questions,
};
