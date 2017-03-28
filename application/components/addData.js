const components = require(process.env.baseName + '/application/components/shared/components.js');

module.exports =
{
  html:`
    <div id="dropdownlist"></div>
  `,
  js:`
    () => {

      function dataCallback(collections){
        let dropdownProperties = {
          header: 'Choose collection',
          body: collections
        }

        let getAndAttachComponent = ${components.componentManager.getAndAttachComponent};
        getAndAttachComponent({Id:"miniComponents/dropdownlist", attachId:"dropdownlist", properties: dropdownProperties});
      }

      let getCollections = ${components.dataManager.getCollections}
      getCollections(dataCallback);


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
