const inquirer = require("inquirer");

const answers = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

module.exports = answers;
