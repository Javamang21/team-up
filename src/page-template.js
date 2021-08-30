function managerCard(manager) {
    return `
    <div class="card mb-3 col-10">
    <div class="card-header manager-color">
    <h3 class='text-center'> ${manager.name}</h3>
    <h4 class='text-center'> <i class="fas fa-mug-hot"></i> Manager </h4>
    </div>
    <div class="card-body">
    <p class="id card-text text-center"> ID: ${manager.id}</p>
    <p class="email card-text text-center"> Email: <a href="mailto:${manager.email}"> ${manager.email}</a></p>
    <p class="officenum card-text text-center"> Office Number: ${manager.officeNumber}</p>
    </div>
  </div>`
};

function engineerCard(engineer) {
    return `
    <div class="card mb-3" style="max-width: 18rem;">
    <div class="card-header">
    <h3 class='text-center'> ${engineer.name}</h3>
    <h4 class='text-center'> <i class="fas fa-glasses"></i> Engineer </h4>
    </div>
    <div class="card-body">
    <p class="id card-text text-center">ID: ${engineer.id}</p>
    <p class="email card-text text-center"> Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></p>
    <p class="gitHub card-text text-center"> Github: <a href="https://github.com/${engineer.github}">${engineer.github} </a></p>
  </div>
</div>`
}
function internCard(intern) {
    return `
    <div class="card mb-3" style="max-width: 18rem;">
    <div class="card-header">
    <h3 class='text-center'> ${intern.name}</h3>
    <h4 class='text-center'> <i class="fas fa-user-graduate"></i> Intern! </h4>
    </div>
    <div class="card-body">
    <p class="id card-text text-center">ID: ${intern.id}</p>
    <p class="email card-text text-center">Email: <a href="mailto:${intern.email}"> ${intern.email}</a></p>
    <p class="school text-center"> School: ${intern.school} </p>
  </div>
</div>`
}

function theTeam(team) {
    const HTML = [];
    HTML.push(team.filter(teamMember => teamMember.getRole() === "Manager").map(manager => managerCard(manager)));
    HTML.push(team.filter(teamMember => teamMember.getRole() === "Intern").map(intern => internCard(intern)));
    HTML.push(team.filter(teamMember => teamMember.getRole() === "Engineer").map(engineer => engineerCard(engineer)));

    return HTML.join("")
}


function generatePage(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Team Up </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    </head>
    
    <body>

    <header class='top-color'>
    <div class='container'>
        <div class='row align-items-center'>
            <div class='col-12'>
                <h1 class='text-center'>
                    Team-Up
                </h1>
            </div>
        </div>
    </div>

    <main>
    <div class="container">
        <div class="row justify-content-center" id="team-up">
            ${theTeam(team)}   
            </div>
        </div>
        </main>

        </body> 
    </html>`
}




module.exports = generatePage;