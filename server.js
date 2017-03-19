// set a global base dirname variable!!!
// This means dont require anything before this!!
process.env.baseName = __dirname;

// To make a https server!!
const https = require('https');
const fs = require('fs');

// Basic server options!
const port = 443;
const httpsOptions = {
  key: fs.readFileSync('./ssl/privkey.pem'),
  cert: fs.readFileSync('./ssl/cert.pem')
}

// This is the basic application, how the website rutes stuff!
const application = require('./application/application.js')

// Initiate the server!
var server = https.createServer(httpsOptions,application).listen(port,function(){
  console.log('server is listening on port: ' + port);
});

const io = require('socket.io')(server); // This is the websocket helping stuff!!
const setTheSockets = require('./setSocket.js'); // This is code for the Sockets!
setTheSockets(io); // This sets all sockets emit stuff!!

// Redirect from http port 80 to https
//require('./redirect.js');
