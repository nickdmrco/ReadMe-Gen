//Importing required packages and generateMarkdown.js.
const fs = require("fs");
const inquirer = require("inquirer");
const md = require("./utils/generateMarkdown.js");
//Creating an object containing the questions to use with Inquirer
const questions = [
 {
  type: "input",
  message: "What is your GitHub username?",
  name: "username"
 },
 {
  type: "input",
  message: "What is your email address?",
  name: "email"
 },
 {
  type: "input",
  message: "What is your project's name?",
  name: "projectname"
 },
 {
  type: "input",
  message: "Please write a short description of your project:",
  name: "description"
 },
 {
  type: "list",
  message: "What kind of license should your project have?",
  name: "license",
  choices: ["MIT", "MPL", "GPL", "Apache", "Boost"]
 },
 {
  type: "input",
  message: "What command should be run to install dependencies?",
  name: "installation"
 },
 {
  type: "input",
  message: "What command should be run to run tests?",
  name: "tests"
 },
 {
  type: "input",
  message: "What does the user need to know about using the repo?",
  name: "usage"
 },
 {
  type: "input",
  message: "What does the user need to know about contributing to the repo?",
  name: "contributing"
 }
];

//Function to run in the initialization that accepts the file name and the response data as parameters.
function writeToFile(fileName, data) {

 const inputData = md(data);
 fs.appendFile(fileName, inputData, (err) => { if (err) { console.log(err) } });
}

//Function initializing Inquirer to prompt for the README information and create the README file.
function init() {
 inquirer.prompt(questions)
  .then((response) => {
   writeToFile("README.md", response);
  })
  .catch((err) => { console.log(err) });
}

init();