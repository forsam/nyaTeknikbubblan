const fs = require('fs');

module.exports = {
  onGetComponent: function (data){
    let component = setComponent(data.Id);
    this.emit('getComponent',component);
  },
  onGetAndAttachComponent: function (data){
    let component = setComponent(data.Id, data.properties);
    component.attachId = data.attachId;
    this.emit('getAndAttachComponent',component);
  }
}

// extensive functions!
function setComponent(Id, properties){
  // Get the file!!
  let path = process.env.baseName + '/application/components/' + Id + '.js';
  // Create data object!
  let component = {};

  if(fs.existsSync(path)){
    let file = require(path);
    delete require.cache[require.resolve(path)];
    component.js = file.js.toString();
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
