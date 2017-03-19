const application =  require('express')(); // this is the router for the application!!
const bodyParser = require('body-parser'); // This is so we can parse http bodies!(I think)
application.use(bodyParser.json()); // support json encoded bodies
application.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

application.get('/',(req,res) => {res.sendFile(__dirname + '/index.html')});

module.exports = application;
