const fs = require('fs');

function getComponent(Id){
  // Get the file!!
  let file = require(process.env.baseName + '/application/parts/' + Id + '.js');
  // Create data object!
  let data = {};
  data.js = file.js.toString();
  data.style = file.style.replace(/component/g, '.' + Id);
  data.html = file.html;
  // Make it more compact!;
  data.styledHtml = `<div class="${Id}">${data.html}</div><style>${data.style}</style>`;
  return data;
}

function setTheSockets(io){
  io.on('connection',function(socket){
    socket.emit('msg', 'You are connected!!')

    socket.on('getBase',function(data){
      let component = getComponent(data.Id);
      socket.emit('getBase',component);
    })
  })
}

module.exports = setTheSockets;
