const mysql2 = require("mysql2");
const { dbConfig } = require("./config");

// connect to sql
const db = mysql2.createConnection(dbConfig);

const getDepartments = (deptFromDb) => {
  return deptFromDb.map((role) => {
    return {
      name: role.title,
      value: role.id,
    };
  });
};
const getRoles = () => {
  roleFromDb;
};
const getEmployees = () => {
  employeeFromDb;
};
const getManagers = () => {
  managerFromDb;
};
