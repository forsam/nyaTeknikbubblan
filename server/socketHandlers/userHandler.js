const dataBase = require(process.env.baseName + '/application/Data/dataBase.js')('application/Data');
const fs = require('fs');
const users = dataBase.getCollection('Users');
const usermap = users.getItemById('Usermap');

module.exports = {
  onLoginUser: function(data){

    if(this.loggedIn === true){console.log('already logged in!!')};
    if(usermap[data.username]){
      let user = users.getItemById(usermap[data.username]);
      if(user.password === data.password){
        this.loggedIn = true;
        this.emit('Login', 'You are logged in!!');
      }
    }else{
      let failString = 'password or username is wrong!';
      this.emit('Login', failString);
    }
  }
}
