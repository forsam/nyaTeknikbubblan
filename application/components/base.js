module.exports =
{
  html:`
    <div class="presentation">
      <h1>EN ENKEL WEBSHOP HOPPAS JAG</h1>
    </div>
    <div class="navbar">
      <div class="navlink" id="Home">Home</div>
      <div class="navlink" id="Login">Login</div>
      <div class="navlink" id="deleteUser">deleteUser</div>
      <div class="navlink" id="Webshop">Webshop</div>
    </div>

    <div class="baseContainer" id="base"></div>
    <div class="footer">
      Thank you for your visit!<br />
      Please come again
    </div>
  `,
  js:
    () => {
      // navlink eventhandlers!
      const navlinkHandler = {};
      navlinkHandler.click = (event) => {
        event.preventDefault();
        machina.componentManager.getAndAttachComponent.send({Id: event.target.id, attachId: 'base'});
      }
      // Get the navlinks and add eventhandlers to them!
      const navlinks = document.querySelectorAll('.navlink');
      for(let i = 0; i < navlinks.length; i++){
        navlinks[i].addEventListener('click',navlinkHandler.click)
      }
    }
  ,
  style:`
  component{
  }
  `
}
