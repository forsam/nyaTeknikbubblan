module.exports =
{
  html:`
    <ul id="foldOut"></ul>
  `,
  js:
    () => {
      let properties = INSERTPROPERTIES
      let foldOut = document.getElementById('foldOut');
      let tmpHTML = `<li>${properties.header}</li>`;
      for(let i = 0; i < properties.body.length; i++){
        tmpHTML += `<li>${properties.body[i]}</li>`;
      }
      foldOut.innerHTML = tmpHTML;
    }
  ,
  style:`
  component {
    background-color: white;
    width: 80%;
    margin: 0px auto;
    border-radius: 20px;
    text-align: center;
  }
  `,
  properties:`
    {
      header: "Header",
      body: ['collection','of','strings','in','Array']
    }
  `
}
