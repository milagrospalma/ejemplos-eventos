window.onload = function() {
  var characteres = document.querySelectorAll(".character");
  for (var i = 0; i < characteres.length; i++) {
    characteres[i].addEventListener('click', showInfo);
  }

  function showInfo() {
    // console.log(this);
    var name = this.dataset.name;
    var date = this.dataset.date;
    // console.log(name, date);
    var textInfo = document.createElement('p');
    textInfo.classList.add('active');
    textInfo.innerText = "Su nombre es " + name + " y su primera aparición fue en " + date;
    // console.log(textInfo);
    var space = document.querySelector('.information');
    space.appendChild(textInfo);
    // La información debe aparecer en la misma línea a la vez
    var infoVisible = document.querySelector('p.active');
    infoVisible.classList.remove('active');
  }
}
