const questions = require("../utils/questions");
const questionsAsked = require("../utils/questions");

// frameworks
require("dotenv").config();
const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const path = require("path");

// while loop to ask questions

const init = async () => {
  let inProgress = true;

  while (inProgress) {
    const questions = await answers(questions);
  }
};
