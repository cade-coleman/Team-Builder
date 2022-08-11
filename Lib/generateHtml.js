
const generateHtml = (projTeam) => {
const createHtml = (data) => {

const team = [];

    for(let i = 0; i < data.length; i++ ){
    team.push(`<div class="card mr-5 mt-5 ml-5" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data[i].getRole()}</h5>
      <h5 class="card-title">${data[i].getName()}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${data[i].getId()}</li>
     <a href='mailto: ${data[i].getEmail()}'> <li class="list-group-item">Email: ${data[i].getEmail()} </li></a>
     ${data[i].getRole()=== 'Engineer' ? `<a href='https://github.com/${data[i].gitHub}?tab=/repositories'> <li class="list-group-item">${data[i].info()}</li></a>`: `<li class="list-group-item">${data[i].info()}</li>`}
     
    </ul>
  </div>`)
    } 
    return team.join(',')
}



return `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    
  <div class='container'>
    <div class='row'>
    ${createHtml(projTeam.filter(member => member.getRole()=== 'Manager'))}
    ${createHtml(projTeam.filter(member => member.getRole()=== 'Engineer'))}
    ${createHtml(projTeam.filter(member => member.getRole()=== 'Intern'))}
    </div>
    </div>

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>

    
  </body>
</html>`
}

module.exports = generateHtml;