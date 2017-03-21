//Initiate the socket!
const socket = io();


function onloadFunction(){
  // Get the baseContainer!!
  const baseContainer = document.getElementById('baseContainer')
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
  socket.emit('getBase',{Id: event.target.id});
}


const setClientSocket = function(socket){
  socket.on('getBase',(data) => {
    let attachPoint = document.getElementById('baseContainer');
    evalParts(data,attachPoint);
  })
}

function evalParts(data,attachPoint){
  // attach the html
  attachPoint.innerHTML =  data.styledHtml;
  // attach the javascript that comes with the component!
  eval('(' + data.js + ')()');
}

window.onload = onloadFunction;
