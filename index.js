// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// connecting README file creator
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
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
            choices: ['MIT', 'The Unlicense'],
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
const readMeFile = (data) => {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('README was successfully created, check it out!');
        }
    });
};
    
    // function to initialize app
    function init() { 
        questions()
        // captured input
        .then((answers) => {
          return generateMarkdown(answers);
        })
        .then((data) => {
          return readMeFile(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // call to initialize app
    init();
