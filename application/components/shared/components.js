module.exports ={
  colors:{
    $danger: '#ce190c',
    $success: '#1fc601',
    $firstPrice: '#fff028',
    $silverGrey: '#cccabb'
  },
  getData: function(socket,data,callback){
    data.callback = callback.toString();
    socket.emit('getData',data);
  },
  changeData: function(data){
    socket.emit('changeData',data);
  },
  addData: function(data){
    socket.emit('addData',data);
  }
}
