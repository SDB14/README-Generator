// TODO: Include packages needed for this application
const inquirer=require("inquirer")
const fs=require("fs")
const generateMarkdown=require("./utils/generateMarkdown")

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
{
    type:"input",
    name:"title",
    message:"What is the title of your application?"
},
{
    type:"input",
    name:"description",
    message:"Description:"
},
{
    type:"input",
    name:"installation",
    message:"Instructions for loading your application?"
},
{
    type:"input",
    name:"usage",
    message:"What is the purpose of this app?"
},
{
    type:"input",
    name:"contributing",
    message:"Who are your collaborators and guidelines?"
},
{
    type:"input",
    name:"tests",
    message:"Test Instructions?"
},
{
    type:"input",
    name:"questions",
    message:"Send Questions:"
},

// Other Questions Here
{
    type:"list",
    name:"license",
    message:"Associated License",
    choices:["MIT", "ISC", "Mozilla", "GNU", "None"]
},

    ]).then(function(response){
        console.log(response)

        fs.writeFileSync("readmetest.md", generateMarkdown(response))
    })
}

// Function call to initialize app
init();
