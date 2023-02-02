const Employees = require("./Employees");
class Intern extends Employees {
    constructor(name, email, school) {
        super(name, email);
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Intern;