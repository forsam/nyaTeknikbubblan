const socket = io();
const machina = new socketManager(socket);

function onloadFunction(){

  machina.componentManager.getAndAttachComponent.send({Id:'base',attachId: 'attach'});
  machina.componentManager.getAndAttachComponent.send({Id:'base',attachId: 'attach2'});
}



window.onload = onloadFunction;
