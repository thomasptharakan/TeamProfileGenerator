const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { validate } = require("@babel/types");
const { VirtualTimeScheduler } = require("rxjs");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
//https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
const getManagerDetails = () => {
    inquirer.prompt([
        {
            name: "mgrName",
            type : "input",
            message: "Enter Managers Name",
        },
        {
            name: "mgrID",
            type : "input",
            message: "Enter Managers Employee ID"
        },
        {
            name: "mgrEmail",
            type : "input",
            message: "Enter Managers Email ID"
        },
        {
            name: "mgrOfficeNumber",
            type : "number",
            message: "Enter Managers Office Number"
        },
    
    ]).then((answers) => {
        console.log (answers);
    });
    
};

// Code from https://www.w3schools.com/js/js_regexp.asp
// Regex from https://regexr.com/3f8cm
function check(name){
    nameRegEx = '/b([A-ZÀ-ÿ][-,a-z. \']+[ ]*)+/i';
    (nameRegEx.test(name))?true:'Not a valid name.';
}

getManagerDetails();