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

// https://www.w3docs.com/snippets/javascript/how-to-validate-an-e-mail-using-javascript.html
const validateEmail = (email) => {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (res.test(String(email).toLowerCase())) ? true : 'Enter Valid Email';
};

// TODO: Write Code to gather information about the development team members, and render the HTML file.
//https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f

//Manager Questions
const managerQuestions = [
    {
        name: "name",
        type: "input",
        message: "Enter Managers Name",
    },
    {
        name: "empId",
        type: "input",
        message: "Enter Managers Employee ID"
    },
    {
        name: "email",
        type: "input",
        message: "Enter Managers Email ID",
        validate: validateEmail
    },
    {
        name: "ofcNumber",
        type: "input",
        message: "Enter Managers Office Number",
        validate: (input) => (isNaN(input)) ? 'Enter a valid Number!!' : true
    },

];
//Engineer Questions
const engineerQuestions = [
    {
        name: "name",
        type: "input",
        message: "Enter Engineer's Name",
    },
    {
        name: "empId",
        type: "input",
        message: "Enter Engineers Employee ID"
    },
    {
        name: "email",
        type: "input",
        message: "Enter Engineers Email ID",
        validate: validateEmail
    },
    {
        name: "gitHub",
        type: "input",
        message: "Enter Engineers Github Username",
    },
];

//Intern Questions
const InternQuestions = [
    {
        name: "name",
        type: "input",
        message: "Enter Intern's Name",
    },
    {
        name: "empId",
        type: "input",
        message: "Enter Intern's Employee ID"
    },
    {
        name: "email",
        type: "input",
        message: "Enter Intern's Email ID",
        validate: validateEmail
    },
    {
        name: "intSchool",
        type: "input",
        message: "Enter Intern's School Name",
    },
];

//Build the Team by Adding to the Team Array
function buildTeam() {
    //Add Manager
    inquirer.prompt(managerQuestions).then((answers) => {
        let { name, empId, email, ofcNumber } = answers;
        let emp = new Manager(name, empId, email, ofcNumber);
        Team.push(emp);
        //Add Additional Employees
        addEmployees();
    });

};
//Recursive function for adding additonal Employees
function addEmployees(){
    //Request action for user to add Engineer/Intern or end
    inquirer.prompt([
        {
            name: "choice",
            type: "list",
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        },
    ]).then((answers) => {
        //Add Engineer
        if (answers.choice === 'Add an engineer') {
            inquirer.prompt(engineerQuestions).then((answers) => {
                let { name, empId, email, gitHub } = answers;
                let emp = new Engineer(name, empId, email, gitHub);
                Team.push(emp);
                addEmployees();
            });
        } else if (answers.choice === 'Add an intern') {
            //Add Intern
            inquirer.prompt(InternQuestions).then((answers) => {
                let { name, empId, email, intSchool } = answers;
                let emp = new Intern(name, empId, email, intSchool);
                Team.push(emp);
                addEmployees();
            });
        } else {
            //Render html
            var opHtml = render(Team);
            //Save Html File to Output Dir
            saveFile(opHtml);
        }
    });

}


function saveFile(html) {
    //https://attacomsian.com/blog/nodejs-check-if-directory-exists?utm_content=cmp-true
    //Checks if Directory exists
    fs.access(OUTPUT_DIR, err => {
        if (err){
            //Director does not exist create Directory
            fs.mkdir(OUTPUT_DIR, (err) => {
                if (err){
                    console.log(`Error Creating Directory ${err}`);
                } else{
                    fs.writeFile(outputPath, html, (err) => {
                        (err)? 'Html file created' : `Error creating File ${err}`;
                    });
                }
              });
        }else{
            fs.writeFile(outputPath, html, (err) => {
                (err)? `Error creating File ${err}` : 'Html file created' ;
            });
        }
    });
}


// Build Team
buildTeam();




