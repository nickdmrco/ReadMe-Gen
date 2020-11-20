//Generate Markdown formatted README file.
let selectedLicense = [];
function generateMarkdown(data) {
 switch (data.license) {
  case "MIT":
   selectedLicense[0] = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
   selectedLicense[1] = "(https://opensource.org/licenses/MIT)";
   break;
  case "MPL":
   selectedLicense[0] = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
   selectedLicense[1] = "(https://opensource.org/licenses/MPL-2.0)";
   break;
  case "GPL":
   selectedLicense[0] = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
   selectedLicense[1] = "(https://www.gnu.org/licenses/gpl-3.0)";
   break;
  case "Apache":
   selectedLicense[0] = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
   selectedLicense[1] = "(https://opensource.org/licenses/Apache-2.0)";
   break;
  case "Boost":
   selectedLicense[0] = "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
   selectedLicense[1] = "(https://www.boost.org/LICENSE_1_0.txt)";
   break;
 }
 return `# ${data.projectname}
  ${selectedLicense[0]}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation} is used to install dependencies.
  ## Usage
  ${data.usage}
  ## License
  ${selectedLicense[0]}
  ${selectedLicense[1]}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests} is used to run tests.
  ## Screenshots
  ## Questions
  Have a question? Email me directly at ${data.email}.
  Check out my other projects at [${data.username}](https://github.com/${data.projectname}).`;
}
//Export function for us with index.js.
module.exports = generateMarkdown;