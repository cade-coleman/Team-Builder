
const Employee = require('./employee');
const index = require('../index')

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email)
        this.gitHub = gitHub;
    }
    info(){
        return `gitHub: ${this.gitHub}`
    }
    getRole(){
        return 'Engineer'
    }
}


module.exports = Engineer;





















// const getEngineer = ({name, id, email, gitHub}) => 
//     ` <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${name}</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">ID:${id}</li>
//       <li class="list-group-item">Email: ${email} </li>
//      <a href='${gitHub}' <li class="list-group-item">${gitHub}</li>
//     </ul>
//   </div>`