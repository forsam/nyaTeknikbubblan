const components = require(process.env.baseName + '/application/parts/shared/components.js');
const dataBase = require(process.env.baseName + '/application/Data/dataBase.js')('application/Data');

module.exports =
{
  html:`
    <h1>Welcome to this fantastic page</h1>
    <div id="bookContainer"></div>
    <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</p>
  `,
  js:() => {
    let trueBooks = books;
    // Grab the book objects!
    let bookContainer = document.getElementsByClassName('bookContainer');

    console.log(trueBooks);
    // Add eventlisteners to the books!
    for(let i = 0; i < books.length; i++){
      books[i].addEventListener('click',() => {
        alert('works')});
    };
  },
  style:`
  component{
    background-color: white;
    width: 80%;
    margin: 0px auto;
    border-radius: 20px;
    text-align: center;
  }
  component img{
    display: inline-block;
    padding: 20px;
    border: 5px solid white;
  }
  component img:hover{
    cursor: pointer;
    border: 5px solid black;
  }
  component h1{
    color: ${components.colors.$silverGrey};
  }
  component p{
    width: 80%;
  }
  component #bookContainer{
    display: block;
  }
  `
}
