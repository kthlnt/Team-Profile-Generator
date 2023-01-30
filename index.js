const inq = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const TeamMember = require("./lib/NonManager");
const rebderTeam = require("./src/createTeam");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const teamMembers = [];
const idsArray = [];

console.log(
    "\nWelcome to the team profile generator!\nUse `npm run reset` to reset the dist/ folder\n"
);

appMenu();