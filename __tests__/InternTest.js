const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create a new Intern instance with full name and email", () => {

            const name = "Nat";
            const email = "email3@email.com"
            const school = "School";

            const newEmployee = new Intern(name, email, school);
            const info1= newEmployee.getSchool();
            const info2= newEmployee.getRole();

            expect(newEmployee instanceof Intern).toBe(true);
            expect(newEmployee.name).toEqual("Nat");
            expect(newEmployee.email).toEqual("email3@email.com");
            expect(info1).toEqual("School");
            expect(info2).toEqual("Intern");
        });
    });
});