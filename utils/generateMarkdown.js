// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// generate markdown for README
const generateMarkdown = data => {
  return `
    # **${data.title}**

    ## **Description:**
    ${data.description}

    ## **Table of Contents:**
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Constributions](#Contributions)
    * [Tests](#Tests)
    * [Questions](#Questions)

    ## **Installation:**
    ${data.installation}

    ## **Usage:**
    ${data.usage}

    ## **License:**
    ${data.license}

    ## **Contributions:**
    ${data.contribution}

    ## **Tests:**
    ${data.tests}

    ## **Questions:**
    * To take a closer look at this app or my other work, checkout my GitHub account:
    !(https://github.com/${data.github})
    * Feel free to contact me directly at ${data.email}
`;
}

// make data from this file available to other files
module.exports = generateMarkdown;
