// const mysql = require("mysql2");

// const db = mysql.createConnection(dbConfig);

// module.exports = dbConfig;

const mysql = require("mysql2/promise");

// const dbConfig = () => {
//   const DB_HOST = process.env.DB_HOST;
//   const DB_NAME = process.env.DB_NAME;
//   const DB_USER = process.env.DB_USER;
//   const DB_PASSWORD = process.env.DB_PASSWORD;
// };

// const initDatabase = async () => {
//   const db = await mysql.createConnection(dbConfig);
//   return db;
// };

// module.exports = dbConfig;
// const mysql = require("mysql2/promise");

const initDatabase = async (config) => {
  const db = await mysql.createConnection(config);

  const executeQuery = async (query, values) => {
    if (values) {
      const [results] = await db.query(query, values);

      return results;
    }

    const [results] = await db.query(query);

    return results;
  };

  const closeConnection = async () => {
    await db.end();
  };

  return {
    executeQuery,
    closeConnection,
  };
};

module.exports = initDatabase;
