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
            message: "Enter Managers Email ID",
            validate: validateEmail
        },
        {
            name: "mgrOfficeNumber",
            type : "input",
            message: "Enter Managers Office Number",
            validate: (input) => (isNaN(input))?'Enter a valid Number!!' : true
        },
    
    ]).then((answers) => {
        console.log (answers);
    });
    
};

// https://www.w3docs.com/snippets/javascript/how-to-validate-an-e-mail-using-javascript.html
const validateEmail = (email) => {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (res.test(String(email).toLowerCase()))? true : 'Enter Valid Email';
};

getManagerDetails();