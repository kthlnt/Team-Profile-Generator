const inq = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const TeamMember = require("./lib/NonManager");
const renderTeam = require("./src/createTeam");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const teamMembers = [];


console.log(
    "\nWelcome to the team profile generator!\nUse `npm run reset` to reset the dist/ folder\n"
);

const appMenu = () => {
    function createTeam() {
        inq
            .prompt([
                {
                    type: "list",
                    name: "teamMemberChoice",
                    message: "Which type of team member would you like to add?",
                    choices: [
                        "Manager",
                        "Non-manager",
                        "I don't need to add any more members."
                    ]
                }
            ])
            .then((response) => {
                switch (response.teamMemberChoice) {
                    case "Manager":
                        addManager();
                        break;
                    case "Non-manager":
                        addNonManager();
                        break;
                    default:
                        buildTeam();
                }
            });
    }

    function addManager() {
        inq
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    validate: (answer) => {
                        if (answer !== "") {
                            return true;
                        }
                        return "You have to enter the manager name.";
                    }
                },
                {
                    type: "input",
                    name: "managerTitle",
                    message: "What is the manager's job title?",
                    validate: (answer) => {
                        if (answer !== "") {
                            return true;
                        }
                        return "You have to enter a job title.";
                    }
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is the manager's email?",
                    validate: (answer) => {
                        if (answer !== "") {
                            return true;
                        }
                        return "You must enter an email.";
                    }               
                }
            ])
            .then((response) => {
                const manager = new Manager(
                    response.managerName,
                    response.managerTitle,
                    response.managerEmail
                );
                teamMembers.push(manager);
                createTeam();
            });
    }

    function addNonManager() {
        inq
            .prompt([
                {
                    type: "input",
                    name: "nonManagerName",
                    message: "What is your team member's name?",
                    validate: (answer) => {
                        if (answer !== "") {
                            return true;
                        }
                        return "You have to enter a name.";
                    }
                },
                {
                    type: "input",
                    name: "nonManagerTitle",
                    message: "What is your team member's job title?",
                    validate: (answer) => {
                        if (answer !== "") {
                            return true;
                        }
                        return "You have to enter a job title.";
                    }
                },
                {
                    type: "input",
                    name: "nonManagerEmail",
                    message: "What is your team member's email?",
                    validate: (answer) => {
                        if (answer !== "") {
                            return true;
                        }
                        return "You have to enter an email.";
                    }
                },

            ])
            .then((response) => {
                const teamMember = new TeamMember(
                    response.nonManagerName,
                    response.nonManagerTitle,
                    response.nonManagerEmail
                );
                teamMembers.push(teamMember);
                createTeam();
            });
    }

    const buildTeam = () => {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, renderTeam(teamMembers), "utf-8");
    };

    createTeam();
};



appMenu();