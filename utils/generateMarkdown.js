// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseBadge = ''
  if (data.license === 'GNU AGPLv3') {
    licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`
  }
  else if (data.license === 'GNU GPLv3') {
    licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`
  }
  else if (data.license === 'GNU LGPLv3') {
    licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`
  }
  else if (data.license === 'Mozilla Public License 2.0') {
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
  }
  else if (data.license === 'Apache License 2.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }
  else if (data.license === 'MIT License') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  }
  else if (data.license === 'Boost Software License 1.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  }
  else if (data.license === 'The Unlicense') {
    licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`
  }
  else {
    licenseBadge = ''
  }
  return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseLink = ''
  if (data.license === 'GNU AGPLv3') {
    licenseLink = `(https://www.gnu.org/licenses/agpl-3.0)`
  }
  else if (data.license === 'GNU GPLv3') {
    licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (data.license === 'GNU LGPLv3') {
    licenseLink = `(https://www.gnu.org/licenses/lgpl-3.0)`
  }
  else if (data.license === 'Mozilla Public License 2.0') {
    licenseLink = `(https://opensource.org/licenses/MPL-2.0)`
  }
  else if (data.license === 'Apache License 2.0') {
    licenseLink = `(https://opensource.org/licenses/Apache-2.0)`
  }
  else if (data.license === 'MIT License') {
    licenseLink = `(https://opensource.org/licenses/MIT)`
  }
  else if (data.license === 'Boost Software License 1.0') {
    licenseLink = `(https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if (data.license === 'The Unlicense') {
    licenseLink = `(http://unlicense.org/)`
  }
  else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license === 'No License') {
    return "";
  }
  return `## License\n
  The project license being used is ${data.license}, you can find more information at: ${renderLicenseLink(data)}`
}

function renderLicenseTable(data) {
  if(data.license === 'No License') {
    return "";
  }
  return `* [License](#license)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projname}
  ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTable(data)}
  * [Contributing](#contributing)
  * [Testing](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
If you have any questions about this project, feel free to contact me directly at ${data.email}. You can also view my other projects at https://github.com/${data.username}.

`;
}

module.exports = generateMarkdown;
