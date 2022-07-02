const mysql = require("mysql2");
const db = require("./config");

const getDepartments = async (db) => {
  await db.query(
    `INSERT INTO departments (departmentName) VALUES ("${departmentAnswers.name}")`
  ); //console.log("data: " + JSON.stringify(departments));
  //console.table(departments);
};
const getRoles = async () => {
  const db = await mysql.createConnection(dbConfig);
  const roles = await db.query("SELECT * FROM roles");
  console.table(roles);
};
const getEmployees = async () => {
  const db = await mysql.createConnection(dbConfig);
  const employees = await db.query("SELECT * FROM employees");
  console.table(employees);
};

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
};
