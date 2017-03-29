const dataBase = require(process.env.baseName + '/application/Data/dataBase.js')('application/Data');
const fs = require('fs');

module.exports = {
  onGetCollections: function (data){
    let collections = dataBase.getCollections();
    this.emit('getCollections',collections);
  },
  onGetData: function (data){
    let collection = dataBase.getCollection(data.collection);
    let tmpData = {data: [], callback: data.callback};
    for(let i = 0; i < data.Id.length; i++){
      tmpData.data[i] = collection.getItemById(data.Id[i]);
    }
    this.emit('getData',tmpData);
  },
  onChangeData: function (data){
    let collection = dataBase.getCollection(data.collection);
    collection.changeItemById(data.Id,data.data);
    this.emit('changeData');
  },
  onAddData: function (data){
    let collection = dataBase.getCollection(data.collection);
    collection.addItem(data.data);
    this.emit('addData');
  },
  onUploadPicture: function (data){
    console.log(data.file);
    fs.writeFileSync(process.env.baseName + '/application/pictures/' + data.name + '.jpg', data.file);
    this.emit('uploadPicture');
  }
}

function send(){

}
