const Employees = require("./Employees");
class Manager extends Employees {
    constructor(name, email, officeNumber) {
        super(name, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;