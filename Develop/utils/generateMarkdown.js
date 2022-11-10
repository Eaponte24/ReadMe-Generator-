// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {};

// TODO: Create a function to generate markdown for README
class Markdown {
static generateMarkdown(answers) {
  
    return `
  
# ${answers.title}

## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)

## Description
${answers.description}

## Installation
${answers.install}

## Usage
${answers.usage}

## Badges

## How to Contribute
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.username}
${answers.email}

## License
${answers.license}
`}};

module.exports = Markdown;