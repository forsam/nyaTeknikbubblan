// Require things!
const dataBase = require(process.env.baseName + '/application/Data/dataBase.js')('application/Data');
const componentHandler = require(process.env.baseName + '/server/socketHandlers/componentHandler.js');
const dataHandler = require(process.env.baseName + '/server/socketHandlers/dataHandler.js');

// Setting the sockets!
function setTheSockets(io){
  io.on('connection',function(socket){
    socket.on('getAndAttachComponent',componentHandler.onGetAndAttachComponent);
    socket.on('getComponent',componentHandler.onGetComponent);
    socket.on('getData',dataHandler.onGetData);
    socket.on('changeData',dataHandler.onChangeData);
    socket.on('addData',dataHandler.onAddData);
    socket.on('uploadPicture',dataHandler.onUploadPicture);
  })
}

module.exports = setTheSockets;
