// Initiate the socket!
const socket = io();

// Set the client socket!!
const setClientSocket = function(socket){
  socket.on('AttachComponent', onAttachComponent);
  socket.on('Component',onComponent);
  socket.on('Data', onData);
  socket.on('Login', onLogin);
}

// Event handlers!!
function onLogin(data){
  alert(data);
}
function onComponent(component){

}
function onAttachComponent(component){
  let attachPoint = document.getElementById(component.attachId);
  renderComponent(component,attachPoint);
}

function onData(data){
  console.log('before eval')
  eval(data.callback);
  dataCallback(data.data);
}

// Functions
function renderComponent(component,attachPoint){
  // attach the html
  attachPoint.innerHTML =  component.styledHtml;
  // attach the javascript that comes with the component
  eval('(' + component.js + ')()');

}
