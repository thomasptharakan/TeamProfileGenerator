// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    //Returns Name of the Employee
    getName(){
        return this.name;
    }
    // Returns ID of the Employee
    getId(){
        return this.id;
    }
    // Returns Email  of the Employee
    getEmail(){
        return this.email;
    }
    // Returns Role of the Employee
    getRole(){
        return this.role;
    }
}

module.exports = Employee;
