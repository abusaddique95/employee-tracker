const mysql = require("mysql2");

const dbConfig = () => {
  const DB_HOST = process.env.DB_HOST;
  const DB_NAME = process.env.DB_NAME;
  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  // const DB_HOST = "localhost";
  // const DB_NAME = "company_db";
  // const DB_USER = "root";
  // const DB_PASSWORD = "password";
};

const db = mysql.createConnection(dbConfig);

module.exports = db;
