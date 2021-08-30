const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = []

const managerData = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "manName",
            message: "What is the name of the manager? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }  else {
                    console.log('Please enter the managers name! (Required)');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "manId",
            message: "What is the ID of the manager? (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                }  else {
                    console.log('Please enter the managers ID! (Required)');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "manEmail",
            message: "What is the managers email address? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }  else {
                    console.log('Please enter the managers email address! (Required)');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number of the Manager? (Required)",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                }  else {
                    console.log('Please enter the managers office number! (Required)');
                    return false;
                }
            }
        }

    ])
}

const internData = () => {
     inquirer.prompt([
        
        {
            type: "input",
            name: "intName",
            message: "What is the name of the intern? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }  else {
                    console.log('Please enter your name! (Required)');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "intId",
            message: "What is the ID of the intern? (Required) (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                }  else {
                    console.log('Please enter the interns ID! (Required)');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "intEmail",
            message: "What is the intern's email address? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }  else {
                    console.log('Please enter the interns Email! (Required)');
                    return false;
                }
            }
        },
        
        {
            type: "input",
            name: "intSchool",
            message: "What school did the intern attend? (Required)",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                }  else {
                    console.log('Please enter the school attended! (Required)');
                    return false;
                }
            }
        },
    ]).then(answer => {
        const intern = new Intern (answer.intName, answer.intId, answer.intEmail, answer.intSchool);
        team.push(intern);
        employees();
    })
}

const engineerData = () => {
     inquirer.prompt([
     
        {
            type: "input",
            name: "engName",
            message: "What is the name of the engineer? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }  else {
                    console.log('Please enter the engineers name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engId",
            message: "What is the ID of the engineer? (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                }  else {
                    console.log('Please enter the engineers ID!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engEmail",
            message: "What is the engineer's email address? (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                }  else {
                    console.log('Please enter the engineers email!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the Github username for the engineer? (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                }  else {
                    console.log('Please enter the github username!');
                    return false;
                }
            }
        },
    ]).then(answer => {
        const engineer = new Engineer (answer.engName, answer.engId, answer.engEmail, answer.github);
        team.push(engineer)
        employees();
    })
}


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
}

const init = function(){
    managerData()
    .then(answer => {
        const manager = new Manager(answer.manName, answer.manId, answer.manEmail, answer.officeNumber);
        team.push(manager);
        employees();
    })
}
const employees = () => {
    inquirer.prompt({
        type: "list",
        message: "Would you like to add an employee?",
        choices: ['Engineer', 'Intern', 'I have no more employees'],
        name: 'employeeList'
      
    }).then(answer => {
        if(answer.employeeList === "Engineer"){
            engineerData()
        }else if(answer.employeeList === "Intern"){
            internData()
        }else {
            console.log(team)
            writeFile(generatePage(team))
        }
    })
}

init();
