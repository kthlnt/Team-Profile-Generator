// const teamMember = require('../lib/TeamMember');

// describe('Team Member', () => {
//     describe('Initialization', () => {
//         it("should create a new team member instance with name, title, and email", () => {
//             const name = "Kat";
//             const title = "Project Manager";
//             const email = "example@gmail.com";

//             const newTeamMember = new teamMember(name, title, email);

//             expect(newTeamMember instanceof teamMember).toBe(true);
//             expect(newTeamMember.name).toEqual("Kat");
//             expect(newTeamMember.title).toEqual("Project Manager");
//             expect(newTeamMember.email).toEqual("example@gmail.com");
//         });
//     });
//     describe('getTitle', ()=> {
//         it("should return the title of the member", () => {
//             const name = "Kat";
//             const title = "Project Manager";
//             const email = "example@gmail.com";
//             const newTeamMember = new teamMember(name, title, email);

//             const result = newTeamMember.getTitle();

//             expect(result).toEqual("example@gmail.com");
//         });
//     });
// });

const Employees = require("../lib/Employees");

describe("Employees", () => {
    describe("Initialization", () => {
        it("should create a new employee instance with full name, and email", () => {
            const name = "Kat";
            const email = "email@email.com";

            const newEmployees = new Employees(name, email);
            const info1 = newEmployees.getName();
            const info2 = newEmployees.getId();
            const info3 = newEmployees.getEmail();
            const info4 = newEmployees.getRole();

            expect(newEmployees instanceof Employees).toBe(true);
            expect(newEmployees.name).toEqual("Kat");
            expect(newEmployees.email).toEqual("email@email.com");
            expect(info1).toEqual("Kat");
            expect(info3).toEqual("email@email.com");
            expect(info4).toEqual("Employees");
        });
    });
});