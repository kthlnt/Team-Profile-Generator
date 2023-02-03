const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should create a new Engineer instance with full name and email", () => {

            const name = "Matt";
            const email = "email2@email.com";
            const engineerGitHub = "github";
            
            const newEmployee = new Engineer(name, email, engineerGitHub);
            
            const info1 = newEmployee.getGitHub();
            const info2 = newEmployee.getRole();

            expect(newEmployee instanceof Engineer).toBe(true);
            expect(newEmployee.name).toEqual("Matt");
            expect(newEmployee.email).toEqual("email2@email.com");
            expect(info1).toEqual("github");
            expect(info2).toEqual("Engineer");
        });
    });
});