// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project description? (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is the installation process for the user? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please describe the installation process!');
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'usage',
           message: 'How is the app used? Please provide instruction and examples. (Required)',
           validate: usageInput => {
               if (usageInput) {
                   return true;
               } else {
                   console.log('List instructions and screenshot examples for the user!');
                   return false;
               }
           }
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'Apache License 2.0', 'The Unlicense'],
            message: 'Select a license from the list. (Required)',
            default: ['MIT'],
            validate: licenseType => {
                if (licenseType) {
                    return true;
                } else {
                    console.log('Please choose a license!');
                    return false;
                }
            } 
         },
        {
           type: 'input',
           name: 'contribution',
           message: 'How can users contribute? (Required)',
           validate: contributionInput => {
               if (contributionInput) {
                   return true;
               } else {
                   console.log('Please explain how a user can contribute.');
                   return false;
               }
           } 
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username (Required)',
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
            message: 'Enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
    ]);
};

// write README file
questions ()
    .then(projectData => {
        const readMeFile = generateMarkdown(projectData)
        fs.writeFile('./dist/README.md', readMeFile, err => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log('README was successfully created, check it out!');
            }
        });
    });

    // // TODO: Create a function to initialize app
    function init() { }

    // // Function call to initialize app
    init();
