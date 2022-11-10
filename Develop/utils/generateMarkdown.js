// TODO: Create a function to generate markdown for README
class Markdown {
  static renderLicenseBadge(license) {
    const badges = {
      isc: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
      gnuplv3:
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    };

    return badges[license];
  }

  static renderLicenseLink(license) {
    const links = {
      isc: "[ISC](https://choosealicense.com/licenses/isc/)",
      gnuplv3: "[GPL v3](https://choosealicense.com/licenses/gpl-3.0/)",
      mit: "[MIT](https://choosealicense.com/licenses/mit/)",
    };

    return links[license];
  }

  static renderLicenseSection(license) {
    if (license) {
      return `This is licensed under the ${this.renderLicenseLink(
        license
      )} license.`;
    } else {
      return "";
    }
  }

  static generateMarkdown(answers) {
    return `
  
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

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

## How to Contribute
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.username}

${answers.email}

## License
${this.renderLicenseSection(answers.license)}
`;
  }
}

module.exports = Markdown;
