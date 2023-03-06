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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(({ name, location, gitHub, linkedIn }) => {
    htmlText = `<!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>header</title>
       </head>
       <body>
       <h1>Hello. My name is ${name} </h1>
       <p> I live in the state of ${location}</p>
       <p>My LinkedIn is ${linkedIn}</p>
       <p>My GitHub is ${gitHub}</p>
       </body>
       </html>`;
    fs.writeFile("index-test.html", htmlText, (err) =>
      err ? console.log(err) : console.log("success")
    );
  });
}

// Function call to initialize app
init();
