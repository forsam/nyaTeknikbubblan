const dataBase = require(process.env.baseName + '/application/Data/dataBase.js')('application/Data');
const fs = require('fs');
const users = dataBase.getCollection('Users');

module.exports = {
  onLoginUser: function(data,callback){
    let usermap = users.getItemById('Usermap');
    if(usermap[data.username]){
      let user = users.getItemById(usermap[data.username]);
      if(user.password === data.password){
        this.loggedIn = true;
        this.emit('loginUser', user,callback,true);
      }
    }else{
      let failString = 'password or username is wrong!';
      this.emit('loginUser', failString,callback,false);
    }
  },
  onLoggedIn: function(callback){
    let data = {callback: callback};
    if(this.loggedIn){
      data.loggedIn = true;
      this.emit('loggedIn',data);
    }else{
      data.loggedIn = false;
      this.emit('loggedIn',data);
    }
  },
  onSubmitUser: function(data,callback){
    let passed = users.addItem(data);
    this.emit('submitUser',callback, passed);
  }
}
