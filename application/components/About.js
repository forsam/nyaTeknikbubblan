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
  js:
    () => {
      machina.componentManager.getAndAttachComponent.send({Id: "Home", attachId: 'likeHome'});
      machina.componentManager.getAndAttachComponent.send({Id: "Webshop", attachId: 'likeWebshop'});
      machina.componentManager.getAndAttachComponent.send({Id: "Blogg", attachId: 'likeBlogg'});
    }
  ,
  style:`
  component{
    background-color: white;
    width: 80%;
    margin: 0px auto;
    border-radius: 20px;
    text-align: center;
  }
  `
}
