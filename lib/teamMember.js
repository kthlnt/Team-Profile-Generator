class teamMember {
    constructor(name, title, email) {
        this.name = name;
        this.title = title;
        this.email = email;
        this.memberRole = "Manager";
    }

    getTitle() {
        return this.email;
    }
}

module.exports = teamMember;