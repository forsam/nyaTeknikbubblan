module.exports =
{
  html:`
    <h1>Welcome try to login my friend!</h1>
    <div id="loginMount">
      <input type="text" id="username"><br />
      <input type="text" id="password"><br />
      <div class="btn" id="submitBtn">Login Button</div>
    </div>


  `,
  js:
    () => {

      function dataCallback(data){
        if(data.name !== 'noUser'){
          document.getElementById('loginMount').innerHTML = "You are logged in now!";
        }else{
          document.getElementById('loginMount').innerHTML = "";
          machina.componentManager.getAndAttachComponent.send({Id:"Submit",attachId:"loginMount"});
        }
      }

      function loginEventHandler(){
        machina.userManager.loginUser.send({username: username.value, password: password.value},dataCallback);
      }

      let loginBtn = document.getElementById('submitBtn');
      let username = document.getElementById('username');
      let password = document.getElementById('password');

      loginBtn.addEventListener('click',loginEventHandler)
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
