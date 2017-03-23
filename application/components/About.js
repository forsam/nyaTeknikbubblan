module.exports =
{
  html:`
    <h1>Welcome to the about page</h1>
    <h2>This is the Home layout component!!</h2>
    <div id="likeHome"></div>
    <h2>this is the webshop layout component!!</h2>
    <div id="likeWebshop"></div>
    <h2>this is the blogg layout component!!</h2>
    <div id="likeBlogg"></div>
  `,
  js:`
    () => {
      socket.emit('getComponent',{Id: "Home", attachId: 'likeHome'});
      socket.emit('getComponent',{Id: "Webshop", attachId: 'likeWebshop'});
      socket.emit('getComponent',{Id: "Blogg", attachId: 'likeBlogg'});
    }
  `,
  style:`
  component{
    background-color: white;
  }
  component #test{
    background-color: black;
  }
  `
}
