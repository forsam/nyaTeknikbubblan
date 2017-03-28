const socketManager = function(socket){

  this.colors = {
    $danger: '#ce190c',
    $success: '#1fc601',
    $firstPrice: '#fff028',
    $silverGrey: '#cccabb'
  }

  this.dataManager = {

    getCollections: {
      send: function(callback){
        socket.emit('getCollections',sendCallback(callback));
      },
      receive: function(callback, collections){
        evalCallback(callback,collections);
      }
    },

    getData: {
      send: function(data,callback){
        // data object is {collection: "CollectionName", Id: "ItemId"}
        data.callback = sendCallback(callback);
        socket.emit('getData',data);
      },
      receive: function(data){
        evalCallback(data.callback,data.data);
      }
    },

    addData: {
      send: function(data){
        // data object is {collection: "CollectionName", data: obj}
        socket.emit('addData',data);
      },
      receive: function(){
      }
    },

    changeData: {
      send: function(data){
        // data object is {collection: "CollectionName", data: obj}
        socket.emit('changeData',data);
      },
      receive: function(){
      }
    },

    uploadPicture: {
      send: function(data){
        // data object is {file: FileReader().result, name: saveName}
        socket.emit('uploadPicture',data);
      },
      receive:function(){
      }
    }
  }

  this.componentManager = {

    getAndAttachComponent: {
      send: function(data){
        // data object is {Id: "FilenamePath", attachId: "elementId", properties: object}
        socket.emit('getAndAttachComponent',data);
      },
      receive: function(component){
        let attachPoint = document.getElementById(component.attachId);
        // attach the html
        attachPoint.innerHTML =  component.styledHtml;
        // attach the javascript that comes with the component
        eval('(' + component.js + ')()');
      }
    },

    getComponent:{
      send: function(data){
        // data object is {Id: "FilenamePath"}
        socket.emit('getComponent',data);
      },
      receive: function(){
      }
    }
  }

  this.userManager = {

    loginUser: {
      send: function(data,callback){
        // data object is {username: "Username", "password: "Password"}
        socket.emit('loginUser',data,sendCallback(callback));
      },
      receive: function(data,callback,passed){
        evalCallback(callback,passed);
      }
    },

    loggedIn: {
      send: function(callback){
        socket.emit('loggedIn',sendCallback(callback));
      },
      receive: function(data){
        evalCallback(data.callback,data.loggedIn);
      }
    },

    submitUser: {
      send: function(data,callback){
        // data object is {username: "Username", "password: "Password"}
        socket.emit('submitUser',data,sendCallback(callback));
      },
      receive: function(callback,passed){
        evalCallback(callback,passed);
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

  function evalCallback(callback,input){
    let callbacks;
    eval('callbacks = ' + callback);
    callbacks(input);
  }
  function sendCallback(callback){
    return callback.toString();
  }
}
