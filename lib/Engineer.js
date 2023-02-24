// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, githubId) {
        super(name,id,email);
        super.role = 'Engineer';
        this.githubId = githubId;
    }

    getGithub(){
        return this.githubId;
    }
}

module.exports = Engineer;