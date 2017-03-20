
module.exports =
{
  html:`
    <div class="footer" id="test">I rule!!</div>
  `,
  js: `
    function() {
      var test = document.getElementById('test');
      test.addEventListener('click',() => alert('CLICKED'))
    }
  `
}
