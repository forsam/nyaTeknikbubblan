const socketManager = function(socket){

  this.colors = {
    $danger: '#ce190c',
    $success: '#1fc601',
    $firstPrice: '#fff028',
    $silverGrey: '#cccabb'
  }

  this.dataManager = {

    getCollections: {
      send: function(data,callback){
        // data is blank!!
        socket.emit(this.pingerString,data);
        this.callback = callback || this.callback;
      },
      receive: function(data){
        this.callback(data);
      },
      callback: function(data){
        console.log(data);
      },
      pingerString: 'getCollections'
    },

    getData: {
      send: function(data,callback){
        // data object is {collection: "CollectionName", Id: "ItemId"}
        socket.emit(this.pingerString,data);
        this.callback = callback || this.callback;
      },
      receive: function(data){
        this.callback(data);
      },
      callback: function(data){
        console.log(data);
      },
      pingerString: 'getData'
    },

    addData: {
      send: function(data,callback){
        // data object is {collection: "CollectionName", data: obj}
        socket.emit(this.pingerString,data);
        this.callback = callback || this.callback;
      },
      receive: function(data){
        this.callback(data);
      },
      callback: function(data){
        console.log(data);
      },
      pingerString: 'addData'
    },

    changeData: {
      send: function(data,callback){
        // data object is {collection: "CollectionName", data: obj, Id: ID}
        socket.emit(this.pingerString,data);
        this.callback = callback || this.callback;
      },
      receive: function(data){
        this.callback(data);
      },
      callback: function(data){
        console.log(data);
      },
      pingerString: 'changeData'
    },

    uploadPicture: {
      send: function(data,callback){
        // data object is {file: FileReader().result, name: saveName}
        socket.emit(this.pingerString,data);
        this.callback = callback || this.callback;
      },
      receive:function(data){
        this.callback(data);
      },
      callback: function(data){
        console.log(data);
      },
      pingerString: 'uploadPicture'
    }
  }

  this.componentManager = {

    getAndAttachComponent: {
      send: function(data,callback){
        // data object is {Id: "FilenamePath", attachId: "elementId", properties: object}
        socket.emit(this.pingerString,data);
      },
      receive: function(data){
        let attachPoint = document.getElementById(data.attachId);
        // attach the html
        attachPoint.innerHTML =  data.styledHtml;
        // attach the javascript that comes with the component
        eval('(' + data.js + ')()');
        console.log(this.callback); //this is the socket, not the object!!!
        this.callback(data);
      },
      callback: function(data){
        console.log(data);
      },
      pingerString: 'getAndAttachComponent'
    },

    getComponent:{
      send: function(data,callback){
        // data object is {Id: "FilenamePath"}
        socket.emit(this.pingerString,data);
        this.callback = callback || this.callback;
      },
      receive: function(data){
        this.callback(data)
      },
      callback: function(data){
        console.log(data);
      },
      pingerString: 'getComponent'
    }
  }

  this.userManager = {

    loginUser: {
      send: function(data,callback){
        // data object is {username: "Username", "password: "Password"}
        socket.emit(this.pingerString,data);
        this.callback = callback || this.callback;
      },
      receive: function(data){
        this.callback(data)
      },
      callback: function(data){
        console.log(data);
      },
      pingerString: 'loginUser'
    },

    loggedIn: {
      send: function(data,callback){
        socket.emit(this.pingerString,data);
        this.callback = callback || this.callback;
      },
      receive: function(data){
        this.callback(data);
      },
      callback: function(data){
        console.log(data);
      },
      pingerString: 'loggedIn'
    },

    submitUser: {
      send: function(data,callback){
        // data object is of type Users!!
        socket.emit(this.pingerString,data);
        this.callback = callback || this.callback;
      },
      receive: function(data){
        this.callback(data);
      },
      callback: function(data){
        console.log(data);
      },
      pingerString: 'submitUser'
    },

    deleteUser: {
      send: function(data,callback){
        // data object is of type Users!!
        socket.emit(this.pingerString,data);
        this.callback = callback || this.callback;
      },
      receive: function(data){
        this.callback(data);
      },
      callback: function(data){
        console.log(data);
      },
      pingerString: 'deleteUser'
    },
  }

  // Set all the socketreceivers!!
  for(manager in this){
    for(emittion in this[manager]){
      for(func in this[manager][emittion]){
        if(typeof this[manager][emittion][func] === 'function' && func === 'receive'){
          socket.on(emittion, this[manager][emittion][func].bind(this[manager][emittion]));
        }
      }
    }
  }
}
