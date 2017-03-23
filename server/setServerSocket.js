const fs = require('fs');
const dataBase = require(process.env.baseName + '/application/Data/dataBase.js')('application/Data');

function getComponent(Id){
  // Get the file!!
  let path = process.env.baseName + '/application/components/' + Id + '.js';
  // Create data object!
  let component = {};

  if(fs.existsSync(path)){
    let file = require(path);
    delete require.cache[require.resolve(path)];
    component.js = file.js;
    component.style = file.style.replace(/component/g, '.' + Id);
    component.html = file.html;
    // Make it more compact!;
    component.styledHtml = `<div class="${Id}">${component.html}</div><style>${component.style}</style>`;
    return component;
  }else{
    component.js = "() => {1+1}";
    component.style = "";
    component.html = `<h1>the component ${Id} is nonexisting</h1>`;
    // Make it more compact!;
    component.styledHtml = `<div class="${Id}">${component.html}</div><style>${component.style}</style>`;
    return component;
  }
}

function setTheSockets(io){
  io.on('connection',function(socket){
    socket.on('getComponent',componentHandler.onGetComponent);
    socket.on('getData',dataHandler.onGetData);
    socket.on('changeData',dataHandler.onChangeData);
    socket.on('addData',dataHandler.onAddData);
    socket.on('uploadPicture',dataHandler.onUploadPicture);
  })
}

// Eventhandler objects!
const componentHandler = {};
const dataHandler = {};

// component handling functions
componentHandler.onGetComponent = function (componentData){
  let component = getComponent(componentData.Id);
  component.attachId = componentData.attachId;
  this.emit('Component',component);
}
// data handling functions
dataHandler.onGetData = function (data){
  let collection = dataBase.getCollection(data.collection);
  let tmpData = {data: [], callback: data.callback};
  for(let i = 0; i < data.Id.length; i++){
    tmpData.data[i] = collection.getItemById(data.Id[i]);
  }
  this.emit('Data',tmpData);
}
dataHandler.onChangeData = function (data){
  let collection = dataBase.getCollection(data.collection);
  collection.changeItemById(data.Id,data);
}
dataHandler.onAddData = function (data){
  let collection = dataBase.getCollection(data.collection);
  collection.addItem(data);
}
dataHandler.onUploadPicture = function (data){
  console.log(data)
  console.log(data.file);
  fs.writeFileSync(process.env.baseName + '/application/pictures/' + data.name + '.jpg', data.file);
}


module.exports = setTheSockets;
