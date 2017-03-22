module.exports =
{
  html:`
    <div id="test">I rule!!</div>
    <img src="image/forDummies.jpg" alt="forDummies"></img>
  `,
  js:`
    () => {
      var test = document.getElementById('test');
      test.addEventListener('click',() => alert('CLICKED'))
    }
  `,
  style:`
  component{
    background-color: white;
  }
  component #test{
    background-color: black;
  }
  `
}
