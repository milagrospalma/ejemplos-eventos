window .addEventListener('keyup', function(e){
  var ascii = e.keyCode;
  console.log(ascii)
  var divColor = document.querySelector('div');
  if (ascii == 38) {
    divColor.classList.add('yellow');
    divColor.classList.remove('red');
    divColor.classList.remove('blue');
    divColor.classList.remove('black');
    divColor.innerHTML = '<p>⬆</p>'
  }
  if (ascii == 40) {
    divColor.classList.add('red');
    divColor.classList.remove('black');
    divColor.classList.remove('yellow');
    divColor.classList.remove('blue');
    divColor.innerHTML = '<p>⬇</p>';
  }
  if (ascii == 37) {
    divColor.classList.remove('black');
    divColor.classList.remove('red');
    divColor.classList.remove('yellow');
    divColor.classList.add('blue')
    divColor.innerHTML = '<p>⬅</p>'
  }
  if (ascii == 39) {
    divColor.classList.remove('red');
    divColor.classList.remove('yellow');
    divColor.classList.remove('blue')
    divColor.classList.add('black');
    divColor.innerHTML = '<p>➡</p>'
  }

})