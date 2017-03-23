// Initiate the socket!
const socket = io();

// Set the client socket!!
const setClientSocket = function(socket){
  socket.on('Component',onComponent);
  socket.on('Data', onData);
}

// Event handlers!!
function onComponent(component){
  let attachPoint = document.getElementById(component.attachId);
  evalComponent(component,attachPoint);
}
function onData(data){
  eval(data.callback);
  dataCallback(data.data);
}
// Functions
function evalComponent(component,attachPoint){
  // attach the html
  attachPoint.innerHTML =  component.styledHtml;
  // attach the javascript that comes with the component!
  eval('(' + component.js + ')()');
}
