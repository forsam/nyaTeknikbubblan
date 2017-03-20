process.env.baseName = __dirname;

var dataBase = require('./dataBase.js')('application/Data');



const Books = dataBase.getCollection('Books');
const Postcards = dataBase.getCollection('Postcards');
const Paintings = dataBase.getCollection('Paintings');

Books.addItem({Id:1, name: 'First book'});
Postcards.addItem({Id:1, name: 'First postcard'});
Paintings.addItem({Id:1, name: 'First painting'});
