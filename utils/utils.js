// const mysql = require("mysql2");

const getDepartments = async (db) => {
  const [departments] = await db.query("SELECT * FROM departments");
  console.table(departments);
};
const getRoles = async (db) => {
  const [roles] = await db.query("SELECT * FROM roles");
  console.table(roles);
};
const getEmployees = async (db) => {
  const [employees] = await db.query("SELECT * FROM employees");
  console.table(employees);
};

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
};
