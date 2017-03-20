module.exports = {
  html:`
    <div id="test">I rule!!<div>
  `,
  js:`
    var test = document.getElementById('test');
    test.addEventListener('click',() => alert('CLICKED'));
  `
}
