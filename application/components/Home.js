const components = require(process.env.baseName + '/application/components/shared/components.js');

module.exports =
{
  html:`
    <h1>Welcome</h1>
    <div id="bookContainer"></div>
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

      let getData = ${components.dataManager.getData};
      getData({collection:'Books',Id:['1','2']},dataCallback);
    }
  `,
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
