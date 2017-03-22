// Initiate the socket!
const socket = io();

// Set the client socket!!
const setClientSocket = function(socket){
  socket.on('Component',(data) => {
    let attachPoint = document.getElementById('base');
    evalParts(data,attachPoint);
  })
  socket.on('Data',(data) => {
    eval(data.callback);
    dataCallback(data.data);
  })
}


function onloadFunction(){
  // Set the socket!
  setClientSocket(socket);

  // Get the navlinks and add eventhandlers to them!
  const navlinks = document.querySelectorAll('.navlink');
  for(let i = 0; i < navlinks.length; i++){
    navlinks[i].addEventListener('click',navlinkHandler.click)
  }

}

// navlink eventhandlers!
const navlinkHandler = {};
navlinkHandler.click = (event) => {
  event.preventDefault();
  socket.emit('getComponent',{Id: event.target.id});
}

function evalParts(data,attachPoint){
  // attach the html
  attachPoint.innerHTML =  data.styledHtml;
  // attach the javascript that comes with the component!
  eval('(' + data.js + ')()');
}

window.onload = onloadFunction;
