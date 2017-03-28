// Require things!
const componentHandler = require(process.env.baseName + '/server/socketHandlers/componentHandler.js');
const dataHandler = require(process.env.baseName + '/server/socketHandlers/dataHandler.js');
const userHandler = require(process.env.baseName + '/server/socketHandlers/userHandler.js');

// Setting the sockets!
function setTheSockets(io){
  io.on('connection',function(socket){
    socket.loggedIn = false;

    socket.on('getAndAttachComponent',componentHandler.onGetAndAttachComponent);
    socket.on('getComponent',componentHandler.onGetComponent);

    socket.on('getData',dataHandler.onGetData);
    socket.on('changeData',dataHandler.onChangeData);
    socket.on('addData',dataHandler.onAddData);
    socket.on('uploadPicture',dataHandler.onUploadPicture);
    socket.on('getCollections',dataHandler.onGetCollections);

    socket.on('loginUser',userHandler.onLoginUser);
    socket.on('loggedIn',userHandler.onLoggedIn);
    socket.on('submitUser',userHandler.onSubmitUser);
  })
}

module.exports = setTheSockets;
