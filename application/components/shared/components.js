module.exports ={
  colors:{
    $danger: '#ce190c',
    $success: '#1fc601',
    $firstPrice: '#fff028',
    $silverGrey: '#cccabb'
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
  },
  getComponent: function(data){
    // data object is {Id: "FilenamePath", attachId: "elementId"}
    socket.emit('getComponent',data);
  }

}
