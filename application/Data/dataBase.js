var fs = require('fs');

var getDataBase = function(path){
  return({
    path: process.env.baseName + '/' + path + '/',

    getCollections: function(){
      let collections = JSON.parse(fs.readFileSync(this.path + 'collections', 'utf8'));
      return collections.Array;
    },

    addCollection: function(collectionName,collectionType){
      if(!this.getCollection(collectionName).exist()){
        var collectionPath = this.path + collectionName + '/';
        var collectionTypePath = collectionPath + 'Type';

        fs.mkdirSync(collectionPath);
        fs.writeFileSync(collectionTypePath, JSON.stringify(collectionType));

        console.log('The collection ' + collectionName + ' was added');
        return 1;
      }else{
        console.log('the collection already exist')
        return 0;
      };
    },

    getCollection: function(collectionName){
      var __collectionName = collectionName;
      var __path = this.path + collectionName + '/';
      console.log('Collection: ' + __collectionName + ' was Getted!')

      collection = {
        exist: function(){
          return(fs.existsSync(__path));
        },
        getItemById: function(Id){
          var path = __path + Id;
          if(fs.existsSync(path)){
            return JSON.parse(fs.readFileSync(__path + Id, 'utf8'));
          }else{
            console.log('trying to get something that doesn\'t exist');
            return 0;
          }
        },
        changeItemById: function(Id, obj){
          var Item = this.getItemById(Id);
          if(Item === 0){
            console.log('Trying to change a nonexisting Item!')
            return 0;
          }
          var path = __path + Item.Id;
          for(key in obj){
            if(key !== Id){
              Item[key] = obj[key];
            }
          }
          fs.writeFileSync(path, JSON.stringify(Item));
          console.log('The item has been changed!');
          return 1;
        },
        addItem: function(obj){
          obj = this.typeCheck(obj);
          var path = __path + obj.Id;
          if(fs.existsSync(path)){
            console.log('The item: ' + obj.Id + ' already exists!');
            return false;
          }else{
            fs.writeFileSync(path, JSON.stringify(obj));
            console.log('The item: ' + obj.Id + ' has been added!');
            return true;
          }
        },
        deleteItemById: function(Id){
          var path = __path + Id;

          if(fs.existsSync(path)){
            var itemToDelete = this.getItemById(Id);
            fs.unlinkSync(path);
            console.log('Item with id: ' + Id + ' has been deleted!');
            let type = this.getItemById('Type');
            for(key in type){
              if(key === 'maps'){
                for(map in type[key]){
                  let mappingInfo = type[key][map].split(' ');
                  let theMap = this.getItemById(map);
                  delete theMap[itemToDelete[mappingInfo[0]]];
                  fs.writeFileSync(__path + map, JSON.stringify(theMap));
                }
              }
            }
            return 1;
          }else{
            console.log('You are trying to delete nothing!');
            return 0;
          };
        },
        typeCheck: function(obj){
          var type = this.getItemById('Type');
          this.changeItemById('Type',{nextId: type.nextId + 1});
          if(type.Id != 0){
            for(key in type){
              if(key !== 'maps' && key !== 'nextId'){
                obj[key]? (obj[key] = obj[key]) : (obj[key] = type[key]);
              }else if(key === 'maps'){
                for(map in type[key]){
                  let mappingInfo = type[key][map].split(' ');
                  let theMap = this.getItemById(map);
                  console.log(obj)
                  theMap[obj[mappingInfo[0]]] = type.nextId;
                  this.changeItemById(map,theMap);
                }
              }
            }
          }
          obj.Id = type.nextId;
          return obj;
        }
      }
      return collection;
    },

    deleteCollection: function(collectionName){
      var __path = this.path + collectionName;
      fs.readdir(__path,function(err,files){
        for(var i = 0; i < files.length; i++){
          fs.unlinkSync(__path + '/' + files[i]);
          console.log('successfully deleted: ' + files[i]);
        }
        fs.rmdirSync(__path);
      })
    }
  })
}

module.exports = getDataBase;
