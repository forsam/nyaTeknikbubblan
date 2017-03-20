process.env.baseName = __dirname;

var dataBase = require('./dataBase.js')('application/Data');


const books = {
  Id: 'number',
  name: 'string'
}

const specialBook = {
  Id: 1,
  name: 'Sagan'
}

dataBase.addCollection('Books',books);
const Books = dataBase.getCollection('Books');
Books.addItem(specialBook);
Books.getItemById(1);
