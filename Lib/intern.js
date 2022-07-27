
const Employee = require('./employee');


class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
    info(){
        return `School: ${this.school}`
    }
    getRole(){
        return 'Intern'
    }
}

module.exports = Intern;