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

        let data = {
          Id:"miniComponents/dropdownlist",
          attachId:"dropdownlist",
          properties: dropdownProperties
        }
        machina.componentManager.getAndAttachComponent.send(data);
      }
<<<<<<< HEAD
      machina.dataManager.getCollections.send(data,dataCallback);
  },
=======

      machina.dataManager.getCollections.send(dataCallback);

    }
  ,
>>>>>>> origin/master
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
