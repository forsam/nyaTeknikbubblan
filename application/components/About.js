const components = require(process.env.baseName + '/application/components/shared/components.js');

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
    <h2>this is the addPicture component!!</h2>
    <div id="likePicture"></div>
  `,
  js:`
    () => {
      let getAndAttachComponent = ${components.componentManager.getAndAttachComponent}
      getAndAttachComponent({Id: "Home", attachId: 'likeHome'});
      getAndAttachComponent({Id: "Webshop", attachId: 'likeWebshop'});
      getAndAttachComponent({Id: "Blogg", attachId: 'likeBlogg'});
      getAndAttachComponent({Id: "addPictures", attachId: 'likePicture'});
    }
  `,
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
