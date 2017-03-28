module.exports =
{
  html:`
      <input type="text" id="username" placeholder="username"><br />
      <input type="text" id="password" placeholder="password"><br />
      <input type="text" id="email" placeholder="email"><br />
      <input type="text" id="firstname" placeholder="first name"><br />
      <input type="text" id="lastname" placeholder="last name"><br />
      <div class="btn" id="submitBtn">Login Button</div>
  `,
  js:`
    () => {

      function dataCallback(passed){
        if(passed){
          console.log('passed');
        }else{
          console.log('not passed');
        }
      }

      function submitEventHandler(){
        if(email.value && lastname.value && firstname.value && password && username){
          machina.userManager.submitUser.send(
            {
              username: username.value,
              password: password.value,
              email: email.value,
              firstname: firstname.value,
              lastname: lastname.value
            },
            dataCallback
          );
        }

      }

      let submitBtn = document.getElementById('submitBtn');
      let username = document.getElementById('username');
      let password = document.getElementById('password');
      let email = document.getElementById('email');
      let firstname = document.getElementById('firstname');
      let lastname = document.getElementById('lastname');

      submitBtn.addEventListener('click',submitEventHandler)
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
