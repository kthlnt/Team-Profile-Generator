const Employees = require("./Employees");
class Engineer extends Employees {
    constructor(name, email, engineerGitHub) {
        super(name, email);
        this.engineerGitHub = engineerGitHub;
        this.role = "Engineer";
    }
    getGitHub() {
        return this.engineerGitHub;
    }
    getRole() {
        return this.role;
    }
}
module.exports = Engineer;