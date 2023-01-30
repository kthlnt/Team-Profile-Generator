const teamMember = require("../lib/TeamMember");

const createTeam = (team) => {
    const addManager = (manager) => {
        return `
        <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${manager.getName()}</li>
              <li class="list-group-item">${manager.getRole()}</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
    </div>
  `
    };

    const addNonManager = (member) => {
        return `
        <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${member.getName()}</li>
            <li class="list-group-item">${member.getRole()}</li>
            <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </div>
    `
    };

    const html = [];

        html.push(
            team
                .filter((teamMember) => teamMember.getMemberRole() === "Manager")
                .map((manager) => addManager(manager))
                .join("")
        );
        html.push(
            team
                .filter((teamMember) => teamMember.getMemberRole() === "Non-Manager")
                .map((member) => addNonManager(member))
                .join("")
        );
        return html.join("");

};

module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
    crossorigin="anonymous"/>
    <link href="./styles/css/reset.css" />
    <link href="./styles/css/style.css"/>
    <title>Team Profile</title>
</head>
<body>
    <h1 class="p-3 mb-2 bg-primary text-white text-center">Team Profile</h1>
        <div class="row">
            ${createTeam(team)}
        </div> 
</body>
</html>
`;
}