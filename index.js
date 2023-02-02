const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');
const organizeTeam = require('./src/createTeam');

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const teamMembers = [];
const addToTeam = [];

const questions = () => {

    const createTeam = () => {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "teamMember",
                    message: "Which type of employee would you like to add?",
                    choices: [
                        "Manager",
                        "Engineer",
                        "Intern",
                        "I don't need any more employees."
                    ]
                }
            ])
            .then((response) => {
                switch (response.teamMember) {
                    case "Manager":
                        createManager();
                        break;
                    case "Engineer":
                        createEngineer();
                        break;
                    case "Intern":
                        createIntern();
                        break;
                    default:
                        buildTeam();
                }
            });

    }
    const createManager = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "Manager's Full Name:",
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "Manager's Email:",
                },
                {
                    type: "input",
                    name: "managerOfficeNum",
                    message: "Manager's Office Number:",
                },
            ])
            .then((response) => {
                const manager = new Manager(
                    response.managerName,
                    response.managerEmail,
                    response.managerOfficeNum
                );
                teamMembers.push(manager);
                addToTeam.push(response.managerID);
                createTeam();
            });
    }

    const createEngineer = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "Engineer's Full Name:",
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Engineer's Email:",
                },
                {
                    type: "input",
                    name: "engineerGitHub",
                    message: "GitHub Username:"
                },
            ])
            .then((response) => {
                const engineer = new Engineer(
                    response.engineerName,
                    response.engineerEmail,
                    response.engineerGitHub
                );
                teamMembers.push(engineer);
                addToTeam.push(response.engineerId);
                createTeam();
            });
    }

    const createIntern = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "Intern's Full Name:",
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "Intern's Email:",
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "Intern's College, University, or Program:",
                },
            ])
        .then((response) => {
            const intern = new Intern(
                response.internName,
                response.internEmail,
                response.internSchool
            );
            teamMembers.push(intern);
            addToTeam.push(response.internId);
            createTeam();
        });
    }

    const buildTeam = () => {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, organizeTeam(teamMembers), "utf-8");
    };

    createTeam();

};

questions();