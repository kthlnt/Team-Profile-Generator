const TeamMember = require('./TeamMember');
class Manager extends TeamMember{
    constructor(name, title, email, memberRole, manager) {
        super(name, title, email);
        this.manager = manager;
    }
    getManager() {
        return this.manager;
    }
}

module.exports = Manager;