const addNewDepartment = async (db, departmentAnswers) => {
  await db.query(
    `INSERT INTO departments (name) VALUES ("${departmentAnswers.name}")`
  );
};

const addNewEmployee = async (db, employeeAnswers) => {
  await db.query(
    `INSERT INTO employees (firstName, lastName) VALUES ("${employeeAnswers.firstName}", ("${employeeAnswers.lastName}")`
  );
};

const addNewRole = async (db, roleAnswers) => {
  await db.query(
    `INSERT INTO roles (departmentId, title, salary) VALUES ("${roleAnswers.roleDepartment}", "${roleAnswers.newRole}", ("${roleAnswers.salary}")`
  );
};

module.exports = {
  addQuestions,
};
