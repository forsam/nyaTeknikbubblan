const dataBase = require(process.env.baseName + '/application/Data/dataBase.js')('application/Data');
const fs = require('fs');
const users = dataBase.getCollection('Users');

module.exports = {
  onLoginUser: function(data){
    let usermap = users.getItemById('Usermap');
    if(usermap[data.username]){
      let user = users.getItemById(usermap[data.username]);
      if(user.password === data.password){
        this.loggedIn = true;
        this.user.name = data.username;
        this.user.password = data.password;

        this.emit('loginUser', user);
      }
    }else{
      let noUser = {name: 'noUser'}
      this.emit('loginUser',noUser);
    }
  },

  onLoggedIn: function(data){
    if(this.loggedIn){
      loggedIn = true;
      this.emit('loggedIn',data);
    }else{
      loggedIn = false;
      this.emit('loggedIn',loggedIn);
    }
  },

  onSubmitUser: function(data){
    let passed = users.addItem(data);
    this.emit('submitUser', passed);
  },

  onDeleteUser : function(data){
    if(this.loggedIn){
      let Id = users.getItemById('Usermap')[this.user.name]
      let passed = users.deleteItemById(Id);
      this.emit('deleteUser', passed);
    }
  }
}
