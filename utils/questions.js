const questions = {
  type: "list",
  message: "Please select a category:",
  name: "category",
  choices: [
    {
      value: "viewDepartments",
      name: "View All Departments",
    },
    {
      value: "viewAllRoles",
      name: "View All Roles",
    },
    {
      value: "viewAllEmployees",
      name: "View All Employees",
    },
    {
      value: "addDepartment",
      name: "Add a Department",
    },
    {
      value: "addRole",
      name: "Add a Role",
    },
    {
      value: "addEmployee",
      name: "Add an Employee",
    },
    {
      value: "updateEmployee",
      name: "Update an Employee's Manager",
    },
    {
      value: "viewEmployeesByDepartment",
      name: "View All Employees by Department",
    },
    {
      value: "viewEmployeesByManager",
      name: "View All Employees by Manager",
    },
    {
      value: "removeDepartment",
      name: "Remove a Department",
    },
    {
      value: "removeRole",
      name: "Remove a Role",
    },
    {
      value: "removeEmployee",
      name: "Remove an Employee",
    },
    {
      value: "quit",
      name: "Quit application",
    },
  ],
};

module.exports = questions;
