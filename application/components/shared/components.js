module.exports ={
  colors:{
    $danger: '#ce190c',
    $success: '#1fc601',
    $firstPrice: '#fff028',
    $silverGrey: '#cccabb'
  },
  dataManager: {
    getCollections: function(callback){
      socket.emit('getCollections',callback.toString());
    },
    getData: function(data,callback){
      // data object is {collection: "CollectionName", Id: "ItemId"}
      data.callback = callback.toString();
      socket.emit('getData',data);
    },
    changeData: function(data){
      // data object is {collection: "CollectionName", data: obj, Id: "ItemId"}
      socket.emit('changeData',data);
    },
    addData: function(data){
      // data object is {collection: "CollectionName", data: obj}
      socket.emit('addData',data);
    },
    uploadPicture: function(data){
      // data object is {file: FileReader().result, name: saveName}
      socket.emit('uploadPicture',data);
    }
  },
  componentManager: {
    getAndAttachComponent: function(data){
      // data object is {Id: "FilenamePath", attachId: "elementId", properties: object}
      socket.emit('getAndAttachComponent',data);
    },
    getComponent: function (data){
      // data object is {Id: "FilenamePath"}
      socket.emit('getComponent',data);
    }
  },
  userManager: {
    loginUser: function(data,callback){
      // data object is {username: "Username", "password: "Password"}
      socket.emit('loginUser',data,callback.toString());
    },
    loggedIn: function(callback){
      socket.emit('loggedIn',callback.toString());
    },
    submitUser: function(data,callback){
      // data object is {username: "Username", "password: "Password"}
      socket.emit('submitUser',data,callback.toString());
    }
  }
}
