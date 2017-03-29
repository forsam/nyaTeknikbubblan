module.exports =
{
  html:`
    <h1>The blogg!</h1>
    <h2 id="loggedInContent"> If you are logged in this will change!</h2>
  `,
  js:
    () => {
      function dataCallback (loggedIn){
        if(loggedIn){
          document.getElementById('loggedInContent').innerHTML = 'LOGGED IN';
        }else{
          document.getElementById('loggedInContent').innerHTML = 'NOT LOGGED IN';
        }
      }
      machina.userManager.loggedIn.send(data,dataCallback)
    }
  ,
  style:`
  component{
    background-color: white;
    width: 80%;
    margin: 0px auto;
    border-radius: 20px;
    text-align: center;
  }
  `
}
