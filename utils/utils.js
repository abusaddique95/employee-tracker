// const mysql = require("mysql2");

const getDepartments = async (db) => {
  const [departments] = await db.query("SELECT * FROM departments");
  console.table(departments);
};
const getRoles = async (db) => {
  const [roles] = await db.query("SELECT * FROM role");
  console.table(roles);
};
const getEmployees = async (db) => {
  `
  SELECT 
    CONCAT(E.FIRST_NAME,' ', E.LAST_NAME) AS 'EMPLOYEE',
    E.ID,
    R.SALARY,
    R.TITLE,
    D.NAME AS 'DEPT NAME',
    CONCAT( M.FIRST_NAME,' ', M.LAST_NAME) AS MANAGER
  FROM EMPLOYEE AS E 
    LEFT JOIN EMPLOYEE AS M  ON E.MANAGER_ID = M.ID 
    INNER JOIN ROLE R ON E.ROLE_ID = R.ID 
    LEFT JOIN DEPARTMENT D ON R.DEPARTMENT_ID = D.ID ;`;
};

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
};
