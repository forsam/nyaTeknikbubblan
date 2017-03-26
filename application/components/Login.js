const components = require(process.env.baseName + '/application/components/shared/components.js');

module.exports =
{
  html:`
    <h1>Welcome try to login my friend!</h1>
    <input type="text" id="username"><br />
    <input type="text" id="password"><br />
    <div class="btn" id="submitBtn">Login Button</div>

  `,
  js:`
    () => {

      function loginEventHandler(){
        console.log(username.value);
        loginUser({username: username.value,password: password.value});
      }

      let loginBtn = document.getElementById('submitBtn');
      let username = document.getElementById('username');
      let password = document.getElementById('password');

      let loginUser = ${components.userManager.loginUser};
      loginBtn.addEventListener('click',loginEventHandler)
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
