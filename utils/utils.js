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
  const [employees] = await db.query(`SELECT e.id,
  CONCAT(e.firstName,' ',
         e.lastName) AS employee,
         r.salary, r.title,
         d.departments,
        CONCAT(m.firstName,' ',
         m.lastName) AS manager
  FROM employees AS e
    LEFT JOIN employees AS m 
    ON e.managerId = m.id INNER JOIN roles r ON e.roleId = r.id LEFT JOIN departments d ON r.departmentId = d.id
    ORDER BY e.lastName;`);
  console.table(employees);
};

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
};
