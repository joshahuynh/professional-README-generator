// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your full name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter a project title:',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a short description explaining the what, why, and how of your project:",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project:',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide instructions to install your program!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions for usage of your program!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can users contribute to your project:',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide instruction to how users can contribute to your project!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to include a license?',
        default: false
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GPL', 'CC--0'],
        when: ({confirmLicenses}) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here:',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please provide instructions on how to run your tests!');
                return false;
            }
        }
    },
];

// Function to write README file
const writeFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: console.log('Open the "dist" folder to see your generated README!')
            });
        })
    })
}

// Function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})