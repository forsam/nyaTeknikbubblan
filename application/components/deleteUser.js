module.exports =
{
  html:`
    <h1>Delete your user!!</h1>
    <div class="btn" id="deleteBtn">DELETE YOURSELF!!</div>
  `,
  js:
    () => {

      function dataCallback(){
        alert('I tried')
      }

      function deleteEventHandler(){
        machina.userManager.deleteUser.send(data,dataCallback);
      }

      let deleteBtn = document.getElementById('deleteBtn');
      deleteBtn.addEventListener('click',deleteEventHandler);
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
    color: machina.colors.$silverGrey;
  }
  component p{
    width: 80%;
  }
  component #bookContainer{
    display: block;
  }
  `
}
