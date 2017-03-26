const components = require(process.env.baseName + '/application/components/shared/components.js');

module.exports =
{
  html:`
    <h1>Welcome add a picture!!</h1>
    <input type="text" id="imgName"></br>
    <input type="file" name="img" id="img">
    <div class="btn" id="imgBtn">btn!!</div>
  `,
  js:`() =>
  {
    let imgName = document.getElementById('imgName');
    let imgBtn = document.getElementById('imgBtn');
    let img = document.getElementById('img');

    let uploadPicture = ${components.dataManager.uploadPicture}

    imgBtn.addEventListener('click',() => {
      let reader = new FileReader();
      let tmpName = imgName.value;
      reader.addEventListener('loadend',() => {
        uploadPicture({file: reader.result, name: tmpName});
      })
      reader.readAsArrayBuffer(img.files[0]);
      img.value = "";
      imgName.value ="";
    })
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
  component img{
    display: inline-block;
    padding: 20px;
    border: 5px solid white;
  }
  component img:hover{
    cursor: pointer;
    border: 5px solid black;
  }
  component h1{
    color: ${components.colors.$silverGrey};
  }
  component p{
    width: 80%;
  }
  component #bookContainer{
    display: block;
  }
  `
}
