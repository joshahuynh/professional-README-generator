// generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Licensing:
  ![license](https://img.shields.io/badge/license-${data.licenses}-blue)](https://shields.io)
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact Me](#contact-me)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.licenses}
  ## Contribution:
  ${data.contributing}
  ## Testing:
  ${data.tests}
  ## Screenshot:
  ![screenshot](assets/images/${data.screenshot}.png)
  ## Contact Me:
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;