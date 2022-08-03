// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        validate: (answer) => {
            if (answer.length <1) {
                return console.log('You must enter a valid GitHub username to continue.');
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What is your e-mail address?",
        name: 'email',
        validate: (answer) => {
            if (answer.length <1) {
                return console.log('You must enter a valid e-mail address to continue.');
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What is your project's name?",
        name: 'projname',
        validate: (answer) => {
            if (answer.length <1) {
                return console.log('You must enter a valid project name to continue.');
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Please write a short description of your project.",
        name: 'description',
        validate: (answer) => {
            if (answer.length <1) {
                return console.log('You must enter a valid project description to continue.');
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Please write a short description of your project.",
        name: 'description',
        validate: (answer) => {
            if (answer.length <1) {
                return console.log('You must enter a valid project description to continue.');
            }
            return true;
        }
    },

    {
        type: 'list',
        message: "What kind of license should your project have?",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unilicense'],
        name: 'license'
    },

    {
        type: 'input',
        message: "What command should be run to install dependencies?",
        name: 'installation'
    },

    {
        type: 'input',
        message: "What command should be run to run tests?",
        name: 'tests'
    },

    {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'usage'
    },

    {
        type: 'input',
        message: "What does the user need to know about contributing to the repo?",
        name: 'contribution'
    },
]);


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, err => {
        if (err){
            return console.log(err);
        }
        console.log("Your README.md has successfully been generated!")
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
