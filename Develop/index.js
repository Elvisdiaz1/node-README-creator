// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the README?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description?",
    name: "description",
  },
  {
    type: "input",
    message: "What is the installation instructions?",
    name: "instructions",
  },
  {
    type: "input",
    message: "What is the usage infomation",
    name: "infomation",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "guidelines",
  },
  {
    type: "input",
    message: " What are the test instructions?",
    name: "test",
  },
  {
    type: "checkbox",
    message: "What license do you want?",
    choices: "MIT",
    choices: "None",
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(
      ({
        title,
        description,
        infomation,
        instructions,
        guidelines,
        test,
        license,
        github,
        email,
      }) => {
        htmlText = `# <${title}>

        ## Description
        
        ${description}
       
        
        ## Table of Contents (Optional)
        
        If your README is long, add a table of contents to make it easy for users to find what they need.
        
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        -[Contribution](#contribution)
        -[Tests](#test)
        -[Questions](#questions)
        
        ## Installation
        
        ${instructions}
        
        ## Usage
        
       ${infomation}
       
        ## License
        
        ${license}
        
        ##Contribution
        
        ${guidelines}
        
        ## Tests
        
        ${test}

        ## Questions

        My GitHub is ${github}
        If you have any questions, please contact me on my email at ${email}. I will reach back to you as soon as possible
        `;
        fs.writeFile("README.md", htmlText, (err) =>
          err ? console.log(err) : console.log("success")
        );
      }
    );
}

// Function call to initialize app
init();
