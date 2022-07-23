const inquirer = require('inquirer')
const Manager = require('./Lib/manager')
const Engineer = require('./Lib/engineer')
const Intern = require('./Lib/intern')

const projTeam = [];


function createManager(){
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

function createEngineer(){
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

    function createIntern(){
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


function createEmployee(){

    inquirer
    .prompt([{
        type: 'list',
        message: 'Choose a team member to create next',
        name: 'empChoice',
        choices: ['intern', 'engineer', 'done']
    }])
    .then(response => {
        switch(response.empChoice){
            case 'intern': 
            createIntern();
            //creates intern
            break

            case 'engineer':
                createEngineer();
            //creates engineer
            break

            case 'done':
                console.log(projTeam)
                console.log(projTeam[0].getRole())


                // build function that renders html

            //Finishes employee selecion
            break
        }
    })
}
    
createManager();