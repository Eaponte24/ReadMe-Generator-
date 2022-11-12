// TODO: Include packages needed for this application
const fs = require("fs");
const markDown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What will the title of your Readme be?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your GitHub profile link?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your Email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is a short description of your application?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your application?",
    name: "install",
  },
  {
    type: "input",
    message: "What are the instructions on how to use your application?",
    name: "usage",
  },
  {
    type: "input",
    message:
      "If others would want to contribute to this application, how would they do so?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Can you give examples on how to run your application?",
    name: "tests",
  },
  {
    type: "list",
    message: "What License will you be using?",
    choices: ["isc", "gnuplv3", "mit"],
    name: "license",
  },
];

// TODO: Create a function to write README file
function writeToFile() {
  return inquirer.prompt(questions)
  .then((answers) => {
    const md = markDown.generateMarkdown(answers);
    fs.writeFile("README.md", md, function (err) {
      err ? console.error(err) : console.log("ReadMe Saved!");
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
