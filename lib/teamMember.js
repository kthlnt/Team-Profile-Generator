class TeamMember {
    constructor(name, title, email) {
        this.name = name;
        this.title = title;
        this.email = email;
        this.memberRole = "Manager";
    }


    getName() {
        return this.name;
    }

    getTitle() {
        return this.title;
    }

    getEmail() {
        return this.email;
    }

    getMemberRole() {
        return this.memberRole;
    }
}

module.exports = TeamMember;