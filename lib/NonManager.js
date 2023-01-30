const TeamMember = require('./TeamMember');

class NonManager extends TeamMember {
    constructor(name, title, email, memberRole, getNotManager) {
        super(name, title, email, memberRole);
        this.getNotManager = getNotManager;
    }
    getNotManager() {
        return this.getNotManager;
    }
}

module.exports = NonManager;