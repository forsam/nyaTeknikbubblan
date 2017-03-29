module.exports =
{
  html:`
    <h1>This is a place to add data in</h1>
    <div id="dropdownlist" class="col-3"></div>
    <div class="col-1">Jst som thext</div>
  `,
  js:
    () => {

      function dataCallback(collections){
        console.log(collections)
        let data = {
          Id:"miniComponents/dropdownlist",
          attachId:"dropdownlist",
          properties: {
            header: 'Choose collection',
            body: collections
          }
        }
        machina.componentManager.getAndAttachComponent.send(data);
      }
      machina.dataManager.getCollections.send(data,dataCallback);
  },
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
