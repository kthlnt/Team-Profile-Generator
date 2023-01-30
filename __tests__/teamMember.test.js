const teamMember = require('../lib/TeamMember');

describe('Team Member', () => {
    describe('Initialization', () => {
        it("should create a new team member instance with name, title, and email", () => {
            const name = "Kat";
            const title = "Project Manager";
            const email = "example@gmail.com";

            const newTeamMember = new teamMember(name, title, email);

            expect(newTeamMember instanceof teamMember).toBe(true);
            expect(newTeamMember.name).toEqual("Kat");
            expect(newTeamMember.title).toEqual("Project Manager");
            expect(newTeamMember.email).toEqual("example@gmail.com");
        });
    });
    describe('getTitle', ()=> {
        it("should return the title of the member", () => {
            const name = "Kat";
            const title = "Project Manager";
            const email = "example@gmail.com";
            const newTeamMember = new teamMember(name, title, email);

            const result = newTeamMember.getTitle();

            expect(result).toEqual("example@gmail.com");
        });
    });
});