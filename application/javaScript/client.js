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
  socket.emit('getAndAttachComponent',{Id: event.target.id, attachId: 'base'});
}

window.onload = onloadFunction;
