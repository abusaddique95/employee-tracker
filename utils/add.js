const addDepartment = async (db, departmentAnswers) => {
  await db.query(
    `INSERT INTO departments (departmenName) VALUES ("${departmentAnswers.name}")`
  );
};
module.exports = {
  addDepartment,
};
