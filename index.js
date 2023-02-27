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
const { generateKey } = require("crypto");

//Declare a team variable
let Team = [];

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
        const {name,empId,email,ofcNumber} = answers;
        const emp = new Manager(name,empId,email,ofcNumber);
        Team.push(emp);
    });
    
};


const getEngineerDetails = () => {
    inquirer.prompt([
        {
            name: "egrName",
            type : "input",
            message: "Enter Engineer's Name",
        },
        {
            name: "egrID",
            type : "input",
            message: "Enter Engineers Employee ID"
        },
        {
            name: "egrEmail",
            type : "input",
            message: "Enter Engineers Email ID",
            validate: validateEmail
        },
        {
            name: "egrGitHub",
            type : "input",
            message: "Enter Engineers Github Username",
        },
    ]).then((answers) => {
        const {name,empId,email,gitHub} = answers;
        const emp = new Engineer(name,empId,email,gitHub);
        Team.push(emp);
    });
    
}

const getInternDetails = () => {
    inquirer.prompt([
        {
            name: "intName",
            type : "input",
            message: "Enter Intern's Name",
        },
        {
            name: "intID",
            type : "input",
            message: "Enter Intern's Employee ID"
        },
        {
            name: "intEmail",
            type : "input",
            message: "Enter Intern's Email ID",
            validate: validateEmail
        },
        {
            name: "intSchool",
            type : "input",
            message: "Enter Intern's School Name",
        },
    ]).then((answers) => {
        const {name,empId,email,intSchool} = answers;
        const emp = new Intern(name,empId,email,intSchool);
        Team.push(emp);
    });   
}

const addNewEmployee = () => {
    inquirer.prompt([
        {
            name: "intName",
            type : "list",
            choices: ['Add an engineer','Add an intern','Finish building the team'],
        },
    ]).then((answers) => {
        if (answers.intName === 'Add an engineer'){
            getEngineerDetails();
            addNewEmployee();
        }else if (answers.intName === 'Add an intern'){
            getInternDetails();
            addNewEmployee();
        }
    });
}

// https://www.w3docs.com/snippets/javascript/how-to-validate-an-e-mail-using-javascript.html
const validateEmail = (email) => {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (res.test(String(email).toLowerCase()))? true : 'Enter Valid Email';
};


// Build Team
// getManagerDetails();
// addNewEmployee();

// Render Html
// var opHtml = render(Team);

//Write to File
