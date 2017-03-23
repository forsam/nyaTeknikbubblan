const components = require(process.env.baseName + '/application/components/shared/components.js');

module.exports =
{
  html:`
    <h1>Welcome</h1>
    <div id="bookContainer"></div>
    <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</p>
  `,
  js:`
    () => {
      // Fetch needed data
      function dataCallback(data){
        let html = '';
        for(let i = 0; i < data.length; i++){
          console.log(data[i])
          html += '<img src="image/' + data[i].pictures[0] + '"></img>'
        }
        document.getElementById('bookContainer').innerHTML = html;
      }

      let getData = ${components.getData};
      getData(socket,{collection:'Books',Id:['1','2']},dataCallback);
    }
  `,
  style:`
  component{
    background-color: red;
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