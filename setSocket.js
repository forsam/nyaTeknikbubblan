function setTheSockets(io){
  io.on('connection',function(socket){
    socket.emit('msg', 'You are connected!!')

    socket.on('click',function(data){
      console.log(data);
      socket.broadcast.emit('chat',data);
    })
  })
}

module.exports = setTheSockets;
