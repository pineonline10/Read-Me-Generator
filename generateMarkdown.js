
// Function to generate markdown for README
function generateMarkdown(data) {
    // Function to render the license badge
    function renderLicenseBadge(license) {
        if (license === "MIT") {
            return `![license badge](https://img.shields.io/badge/License-MIT-green)`;
          } else if (license === "Apache") {
            return `![license badge](https://img.shields.io/badge/License-Apache-red)`;
          } else if (license === "GNU") {
            return `![license badge](https://img.shields.io/badge/License-GNU-blue)`;
          }
        }
        
        //Creates a function that returns the license link
        function renderLicenseLink(license) {
          if (license === "No License") {
            return "";
          } else {
            return `[${renderLicenseBadge(license)}](license.md)`;
          }
        }
        
        //Creates a function that returns the license section of README
        function renderLicenseSection(license) {
          if (license === "MIT") {
            return `## License 
            MIT License`;
          } else if (license === "Apache") {
            return `## License 
            Apache License`;
          } else if (license === "GNU") {
            return `## License 
            GNU License`;
          } else {
            return `## License 
            No License`;
          }
      }

    return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  ## ${data.description}

  ## Description
To go into more detail, refer to these questions:
- What was your motivation?
- Why did you build this project?
- What problem does it solve?
- What did you learn?

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Questions
Reach out to me if you have any questions!
Github: ${data.username}
LinkedIn: ${data.linkedIn}
Email: ${data.email}

## Usage

${data.instructions}

  ![${data.title} in action](assets/images/screenshot.png)

## Credits

The collaborators on this project include me, myself, and I -- ${data.username}
${"As well as " + data.collab}   

Tutorials followed include Columbia University EdX's Coding Bootcamp 2023, as well as:  
 [Github Docs](https://docs.github.com/en)  
 [developer mozilla](https://developer.mozilla.org/en-US/)  
 [Dev.to](https://dev.to/)  
 [Code Academy blogs](https://www.codecademy.com/resources/blog/)  
 [W3 Schools](https://www.w3schools.com/)

${"Special thanks to " + data.shoutout + "for the additional guidance"} 



${renderLicenseSection(data.license)}

---

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)


`;

  return readMe;
}
  
  module.exports = generateMarkdown;
  