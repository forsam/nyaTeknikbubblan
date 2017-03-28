const fs = require('fs');

module.exports = {
  onGetComponent: function (componentData){
    let component = getComponent(componentData.Id);
    this.emit('Component',component);
  },
  onGetAndAttachComponent: function (componentData){
    let component = getComponent(componentData.Id, componentData.properties);
    component.attachId = componentData.attachId;
    this.emit('AttachComponent',component);
  }
}

// extensive functions!
function getComponent(Id, properties){
  // Get the file!!
  let path = process.env.baseName + '/application/components/' + Id + '.js';
  // Create data object!
  let component = {};

  if(fs.existsSync(path)){
    let file = require(path);
    delete require.cache[require.resolve(path)];
    component.js = file.js;
    if(file.properties){
      component.js = component.js.replace('INSERTPROPERTIES', JSON.stringify(properties) || file.properties);
    }
    component.style = file.style.replace(/component/g, '.' + Id);
    component.html = file.html;
    // Make it more compact!;
    component.styledHtml = `<div class="${Id}">${component.html}</div><style>${component.style}</style>`;
    return component;
  }else{
    component.js = "() => {1+1}";
    component.style = "";
    component.html = `<h1>the component ${Id} is nonexisting</h1>`;
    // Make it more compact!;
    component.styledHtml = `<div class="${Id}">${component.html}</div><style>${component.style}</style>`;
    return component;
  }
}
