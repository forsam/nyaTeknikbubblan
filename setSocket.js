const fs = require('fs');

function setTheSockets(io){
  io.on('connection',function(socket){
    socket.emit('msg', 'You are connected!!')

    socket.on('getBase',function(data){
      let file = require(process.env.baseName + '/application/parts/' + data.Id + '.js');
      socket.emit('getBase',file);
    })
  })
}

module.exports = setTheSockets;
