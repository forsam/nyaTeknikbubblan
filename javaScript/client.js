//Initiate the socket!
const socket = io();

function basicFunction(){
  // Get the baseContainer!!
  const baseContainer = document.getElementById('baseContainer')
  // Set the socket!
  setClientSocket(socket);

  // Get the navlinks and add eventhandlers to them!
  const links = document.querySelectorAll('.navlink');
  for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click',linkHandeler)
  }

}

const linkHandeler = function(event){
  event.preventDefault();
  updateBaseContainer(this.id)
}

const updateBaseContainer = function(id){
  console.log('inside the update base contatiner function with id: ' + id);
  socket.emit('getBase',{Id: id});
}

const setClientSocket = function(socket){
  socket.on('getBase',(data) => {
    baseContainer.innerHTML = data.html + `<script>${data.js}</script>`;
    console.log(data.html + `<script>${data.js}</script>`)
  })
}

window.onload = basicFunction;
