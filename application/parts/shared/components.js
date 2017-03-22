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
  }
}
