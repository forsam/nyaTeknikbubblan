const socket = io();
const machina = new socketManager(socket);

function onloadFunction(){
  machina.componentManager.getAndAttachComponent.send({Id:'base',attachId: 'attach'});
}



window.onload = onloadFunction;
