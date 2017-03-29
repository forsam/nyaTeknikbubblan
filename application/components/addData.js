module.exports =
{
  html:`
    <div id="dropdownlist"></div>
  `,
  js:
    () => {

      function dataCallback(collections){
        let dropdownProperties = {
          header: 'Choose collection',
          body: collections
        }

        machina.componentManager.getAndAttachComponent.send({Id:"miniComponents/dropdownlist", attachId:"dropdownlist", properties: dropdownProperties});
      }

      machina.dataManager.getCollections.send(dataCallback);

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
