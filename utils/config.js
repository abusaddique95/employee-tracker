require("dotenv").config();
const mysql2 = require("mysql2");

const dbConfig = () => {
  const DB_HOST = process.env.DB_HOST;
  const DB_NAME = process.env.DB_NAME;
  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;
};

module.exports = dbConfig;
