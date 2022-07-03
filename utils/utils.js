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
  const [employees] = await db.query(
    "SELECT  employee.id, employee.firstName, employee.lastName,role.title, role.salary, department.departmentName FROM employee INNER JOIN `role` ON employee.roleId=role.id LEFT JOIN `department` ON role.departmentId = department.id"
  );

  //     return results;);
  console.table(employees);
};

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
};
