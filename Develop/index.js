// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
  .prompt([
    {
        type: 'input',
        message: 'What will the title of your Readme be?',
        name: 'title',
      },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
    {
      type: 'input',
      message: 'What is a short description of your application?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your application?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'What are the instructions on how to use your application?',
      name: 'usage',
    },
    {
        type: 'input',
        message: 'If others would want to contribute to this application, how would they do so?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Can you give examples on how to run your application?',
        name: 'tests',
      },
      {
        type: 'list',
        message: 'What License will you be using?',
        choices: ['Apache', 'GNU', 'MIT'],
        name: 'license',
      }
  ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();