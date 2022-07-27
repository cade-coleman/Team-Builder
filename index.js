const inquirer = require('inquirer')
const Manager = require('./Lib/manager')
const Engineer = require('./Lib/engineer')
const Intern = require('./Lib/intern')

const generateHtml = require('./Lib/generateHtml')

const fs = require('fs');

var projTeam = [];
var projTeamNum = 0;

// var cards = [];

function promptManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the employees name?',
                name: 'name',

            },
            {
                type: 'input',
                message: 'What is the employees id?',
                name: 'id',

            },
            {
                type: 'input',
                message: 'What is the employee email?',
                name: 'email',

            },
            {
                type: 'input',
                message: 'What is the employees office number?',
                name: 'officeNumber',

            },



        ])
        .then((response) => {
            const newManager = new Manager(response.name, response.id, response.email, response.officeNumber)

            projTeam.push(newManager)


            createEmployee()
        })
}

function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the employees name?',
                name: 'name',

            },
            {
                type: 'input',
                message: 'What is the employees id?',
                name: 'id',

            },
            {
                type: 'input',
                message: 'What is the employee email?',
                name: 'email',

            },
            {
                type: 'input',
                message: 'What is the employees Git Hub?',
                name: 'gitHub',

            },

        ])
        .then((response) => {
            const newEngineer = new Engineer(response.name, response.id, response.email, response.gitHub)

            projTeam.push(newEngineer)

            createEmployee()
        })
}

function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the employees name?',
                name: 'name',

            },
            {
                type: 'input',
                message: 'What is the employees id?',
                name: 'id',

            },
            {
                type: 'input',
                message: 'What is the employee email?',
                name: 'email',

            },
            {
                type: 'input',
                message: 'Where does this employee attend school?',
                name: 'school',

            },



        ])
        .then((response) => {
            const newIntern = new Intern(response.name, response.id, response.email, response.school)

            projTeam.push(newIntern)

            createEmployee()
        })
}


function createEmployee() {

    inquirer
        .prompt([{
            type: 'list',
            message: 'Choose a team member to create next',
            name: 'empChoice',
            choices: ['intern', 'engineer', 'done']
        }])
        .then(response => {
            switch (response.empChoice) {
                case 'intern':
                    createIntern();
                    //creates intern
                    break

                case 'engineer':
                    createEngineer();
                    //creates engineer
                    break

                case 'done':
                    renderEmpObj()


            }
        })
}



function renderEmpObj(data) {
    for (var i = 0; i < projTeam.length; i++) {
        // renderCard()
        console.log(projTeam[projTeamNum]);
        // generateHtml()
        
        projTeamNum = projTeamNum + 1;


}


    
    makePage()
}


const makePage = () => fs.writeFileSync('dist/index.html', generateHtml(projTeam))


const renderCard = (projTeam) => 
      `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${projTeam[projTeamNum].getName()}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${projTeam[projTeamNum].getId()}</li>
      <li class="list-group-item">Email: ${projTeam[projTeamNum].getEmail()} </li>
     <a href='${projTeam[projTeamNum].getInfo()}' <li class="list-group-item">${projTeam[projTeamNum].getInfo()}</li>
    </ul>
  </div>`
 


promptManager()










