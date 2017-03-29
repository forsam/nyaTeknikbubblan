const dataBase = require(process.env.baseName + '/application/Data/dataBase.js')('application/Data');
const fs = require('fs');

module.exports = {

  onGetCollections: function (data){
    let collections;
    if(this.loggedIn){
      collections = dataBase.getCollections();
    }else{
      collections = [];
    }
    this.emit('getCollections',collections);
  },

  onGetData: function (data){
    // data object is {collection: "CollectionName", Id: "ItemId"}
    let collection = dataBase.getCollection(data.collection);
    let tmpData = [];
    for(let i = 0; i < data.Id.length; i++){
      tmpData[i] = collection.getItemById(data.Id[i]);
    }
    this.emit('getData',tmpData);
  },

  onAddData: function (data){
    let collection = dataBase.getCollection(data.collection);
    collection.addItem(data.data);
    this.emit('addData');
  },

  onChangeData: function (data){
    let collection = dataBase.getCollection(data.collection);
    collection.changeItemById(data.Id,data.data);
    this.emit('changeData');
  },

  onUploadPicture: function (data){
    console.log(data.file);
    fs.writeFileSync(process.env.baseName + '/application/pictures/' + data.name + '.jpg', data.file);
    this.emit('uploadPicture');
  }
}
