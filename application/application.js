const application =  require('express')(); // this is the router for the application!!
const bodyParser = require('body-parser'); // This is so we can parse http bodies!(I think)

application.use(bodyParser.json()); // support json encoded bodies
application.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

application.get('/',(req,res) => {res.sendFile(__dirname + '/index.html')});
application.get('/image/:image', (req,res) => {res.sendFile(process.env.baseName + '/application/pictures/' + req.params['image'])});
application.get('/css/:file', (req,res) => {res.sendFile(process.env.baseName + '/application/styleSheets/css/' + req.params['file'])});
application.get('/js/:file', (req,res) => {res.sendFile(process.env.baseName + '/application/javaScript/' + req.params['file'])});
module.exports = application;
