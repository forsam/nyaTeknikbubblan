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
      let getComponent = ${components.getComponent}
      getComponent({Id: "Home", attachId: 'likeHome'});
      getComponent({Id: "Webshop", attachId: 'likeWebshop'});
      getComponent({Id: "Blogg", attachId: 'likeBlogg'});
      getComponent({Id: "addPictures", attachId: 'likePicture'});
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
