// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'No License'],
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
};

//Created a function to write README file
const writeFile = data => {
    fs.writeFile('MyREADME.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log ("Your file has been created successfully!")
        }
    })
}

//Created a function call to initialize app
questions()
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})

