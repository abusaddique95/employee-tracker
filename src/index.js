const questions = require("../utils/questions");
const answers = require("../utils/answers");
const questionsAsked = require("../utils/questions");
const writeToFile = require("../utils/writeToFile");

// frameworks
require("dotenv").config();
const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const path = require("path");

// while loop to ask questions

let inProgress = true;

const init = async () => {
  while (inProgress) {
    const questions = await answers(questions);
  }
};
