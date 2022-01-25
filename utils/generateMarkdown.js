// license badge function
function renderLicenseBadge(license) {
  if (!license) {
    // If there is no license, return an empty string
    return "";
  } else {
    // return a badge based on which license is passed in
    license = license.split('').join('%20');
    return `![License Badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}


// license link function
function renderLicenseLink(license) {
  if (!license) {
    // If there is no license, return an empty string
    return "";
  } else {
    //return corresponding link to license passed in
    return `![License Link](https://opensource.org/licenses/${license})`;
  }
}

// license section of README function
function renderLicenseSection(data) {
  if (!data.license) {
    // If there is no license, return an empty string
    return "";
  }
  let currentYear = new Date().getFullYear();
    // return MIT license information
  if (data.license === 'MIT') {
    let mitLicense = `
### **MIT License**

Copyright ${currentYear}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
    return mitLicense;
    // return Unlicense information
  } else if (data.license === 'The Unlicense') {
    let unLicense = `
### **The Unlicense**

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
    `
    return unLicense;
  }
};

  // generate markdown for README
  const generateMarkdown = data => {
    return `
# **${data.title}**
${renderLicenseBadge(data.license)}

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
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## **Contributions:**
${data.contribution}

## **Tests:**
${data.tests}

## **Questions:**
* To take a closer look at this app or my other work, checkout my [GitHub account](https://github.com/${data.github})
* Feel free to contact me directly through [email](${data.email})
  `;
}

  // make data from this file available to other files
  module.exports = generateMarkdown;
