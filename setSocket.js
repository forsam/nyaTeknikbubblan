const fs = require('fs');
const dataBase = require(process.env.baseName + '/application/Data/dataBase.js')('application/Data');

function getComponent(Id){
  // Get the file!!
  let file = require(process.env.baseName + '/application/parts/' + Id + '.js');
  // Create data object!
  let data = {};
  //data.js = file.js.toString();
  data.js = file.js;
  data.style = file.style.replace(/component/g, '.' + Id);
  data.html = file.html;
  // Make it more compact!;
  data.styledHtml = `<div class="${Id}">${data.html}</div><style>${data.style}</style>`;
  return data;
}

function setTheSockets(io){
  io.on('connection',function(socket){
    socket.emit('msg', 'You are connected!!')

    socket.on('getComponent',function(data){
      let component = getComponent(data.Id);
      socket.emit('Component',component);
    })
    socket.on('getData',function(data){
      let collection = dataBase.getCollection(data.collection);
      let tmpData = {data: [], callback: data.callback};
      for(let i = 0; i < data.Id.length; i++){
        tmpData.data[i] = collection.getItemById(data.Id[i]);
      }
      socket.emit('Data',tmpData);
    })
  })
}

module.exports = setTheSockets;
