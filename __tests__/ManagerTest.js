const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create a new Manager instance with name and email", () => {

            const name = "Pat";
            const email = "email4@email.com";
            const officeNumber = 555-555-5555;

            const newEmployee = new Manager(name, id, email, officeNumber);
            const info1 = newEmployee.getOfficeNumber();
            const info2 = newEmployee.getRole();

            expect(newEmployee instanceof Manager).toBe(true);
            expect(newEmployee.name).toEqual("Pat");
            expect(newEmployee.email).toEqual("email4@email.com");
            expect(info1).toEqual(555-555-5555);
            expect(info2).toEqual("Manager");

        });
    });
});