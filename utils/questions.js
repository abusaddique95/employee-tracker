const questions = {
  type: "list",
  message: "Please select a category:",
  name: "category",
  choices: [
    {
      value: "viewDepartments",
      name: "View All Departments",
      short: "viewDepartments",
    },
    {
      value: "viewAllRoles",
      name: "View All Roles",
      short: "viewAllRoles",
    },
    {
      value: "viewAllEmployees",
      name: "View All Employees",
      short: "viewDepartments",
    },
    {
      value: "addDepartment",
      name: "Add a Department",
      short: "addDepartment",
    },
    {
      value: "addRole",
      name: "Add a Role",
      short: "addRole",
    },
    {
      value: "addEmployee",
      name: "Add an Employee",
      short: "addEmployee",
    },
    {
      value: "updateEmployee",
      name: "Update an Employee's Manager",
      short: "updateEmployee",
    },
    {
      value: "viewEmployeesByDepartment",
      name: "View All Employees by Department",
      short: "viewEmployeesByDepartment",
    },
    {
      value: "viewEmployeesByManager",
      name: "View All Employees by Manager",
      short: "viewEmployeesByManager",
    },
    {
      value: "removeDepartment",
      name: "Remove a Department",
      short: "removeDepartment",
    },
    {
      value: "removeRole",
      name: "Remove a Role",
      short: "removeRole",
    },
    {
      value: "removeEmployee",
      name: "Remove an Employee",
      short: "removeEmployee",
    },
    {
      value: "quit",
      name: "Quit application",
      short: "quit",
    },
  ],
};

module.exports = questions;
