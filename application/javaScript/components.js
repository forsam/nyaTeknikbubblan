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
      pingerString: 'getData',
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
      }
    },

    addData: {
      pingerString: 'addData',
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
      }
    },

    changeData: {
      pingerString: 'changeData',
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
      }
    },

    uploadPicture: {
      pingerString: 'uploadPicture',
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
      }
    }
  }

  this.componentManager = {

    getAndAttachComponent: {
      pingerString: 'getAndAttachComponent',
      send: function(data,callback){
        // data object is {Id: "FilenamePath", attachId: "elementId", properties: object}
        socket.emit(this.pingerString,data);
        console.log('callback: ' + callback)
        console.log('this.callback: ' + this.callback)
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
      }
    },

    getComponent:{
      pingerString: 'getComponent',
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
      }
    }
  }

  this.userManager = {

    loginUser: {
      pingerString: 'loginUser',
      send: function(data,callback){
        // data object is {username: "Username", "password: "Password"}
        socket.emit(this.pingerString,data,sendCallback(callback));
        this.callback = callback || this.callback;
      },
      receive: function(data){
        this.callback(data)
      },
      callback: function(data){
        console.log(data);
      }
    },

    loggedIn: {
      pingerString: 'loggedIn',
      send: function(data,callback){
        socket.emit(this.pingerString,sendCallback(callback));
        this.callback = callback || this.callback;
      },
      receive: function(data){
        this.callback(data);
      },
      callback: function(data){
        console.log(data);
      }
    },

    submitUser: {
      pingerString: 'submitser',
      send: function(data,callback){
        // data object is {username: "Username", "password: "Password"}
        socket.emit(this.pingerString,data,sendCallback(callback));
        this.callback = callback || this.callback;
      },
      receive: function(data){
        this.callback(data);
      },
      callback: function(data){
        console.log(data);
      }
    }
  }

  // Set all the socketreceivers!!
  for(manager in this){
    for(emittion in this[manager]){
      for(func in this[manager][emittion]){
        if(typeof this[manager][emittion][func] === 'function' && func === 'receive'){
          socket.on(emittion, this[manager][emittion][func]);
        }
      }
    }
  }
}
