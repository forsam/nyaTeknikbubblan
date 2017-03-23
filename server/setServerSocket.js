const fs = require('fs');
const dataBase = require(process.env.baseName + '/application/Data/dataBase.js')('application/Data');

function getComponent(Id){
  // Get the file!!
  let file = require(process.env.baseName + '/application/parts/' + Id + '.js');
  // Create data object!
  let component = {};
  component.js = file.js;
  component.style = file.style.replace(/component/g, '.' + Id);
  component.html = file.html;
  // Make it more compact!;
  component.styledHtml = `<div class="${Id}">${component.html}</div><style>${component.style}</style>`;
  return component;
}

function setTheSockets(io){
  io.on('connection',function(socket){
    socket.emit('msg', 'You are connected!!')

    socket.on('getComponent',function(componentData){
      let component = getComponent(componentData.Id);
      component.attachId = componentData.attachId;
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
