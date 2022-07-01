const questions = require("../utils/questions");
const answers = require("../utils/answers");
const questionsAsked = require("../utils/questions");
const writeToFile = require("../utils/writeToFile");

// while loop to ask questions

let inProgress = true;

const init = async () => {
  while (inProgress) {
    const questions = await answers(questions);
  }
};
