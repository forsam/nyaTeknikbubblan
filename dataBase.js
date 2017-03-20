var fs = require('fs');

var getDataBase = function(path){
  return({
    path: process.env.baseName + '/' + path + '/',

    addCollection: function(collectionName,collectionType){
      if(!this.getCollection(collectionName).exist()){
        var collectionPath = this.path + collectionName + '/';
        var collectionTypePath = collectionPath + 'Type';

        fs.mkdirSync(collectionPath);
        fs.writeFileSync(collectionTypePath, JSON.stringify(collectionType));

        console.log('The collection ' + collectionName + ' was added')
      }else{
        console.log('the collection already exist')
      };
    },

    getCollection: function(collectionName){
      var __collectionName = collectionName;
      var __path = this.path + collectionName + '/';

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
            return {Id: 0};
          }
        },

        changeItemById: function(Id, obj){
          var Item = this.getItemById(Id);
          if(Item.Id === 0){
            console.log('Trying to change a nonexisting Item!')
            return;
          }
          var path = __path + Item.Id;
          for(key in obj){
            if(key !== Id){
              Item[key] = obj[key];
            };
          };
          fs.writeFileSync(path, JSON.stringify(Item));
          console.log('The item has been changed!')
        },

        addItem: function(obj){
          obj = this.typeCheck(obj);
          var path = __path + obj.Id;
          if(fs.existsSync(path)){
            console.log('The item: ' + obj.Id + ' already exists!');
          }else{
            fs.writeFileSync(path, JSON.stringify(obj));
            console.log('The item: ' + obj.Id + ' has been added!');
          }
        },

        deleteItemById: function(Id){
          var path = __path + Id;
          if(fs.existsSync(path)){
            fs.unlinkSync(path);
            console.log('Item with id: ' + Id + ' has been deleted!');
          }else{
            console.log('You are trying to delete nothing!');
          };
        },
        typeCheck: function(obj){
          var type = this.getItemById('Type');
          for(key in type){
            obj[key]? (obj[key] = obj[key]) : (obj[key] = type[key]);
          };
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
