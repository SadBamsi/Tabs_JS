window.onload = function () {
	// получакм массив табов 
  var tabs = document.getElementsByClassName('tabs-item');
  // Получаем массив картинок
  var pictures = document.getElementsByClassName('img-pict');
  // Получаем атрибут, табы, по которой произошёл клик
  for (var i = 0; i < tabs.length; i++) {
    var tab = tabs[i];
    tab.addEventListener('click', fusion);
    function fusion (event) {
      var dataT = event.target.getAttribute('data-target');
      for (var j = 0; j < pictures.length; j++) {
        if (j == dataT) {
          pictures[j].classList.add('visible');
          tabs[j].classList.add('active');
        }
        else {
          pictures[j].classList.remove('visible');
          tabs[j].classList.remove('active')
        }
      }
    }
  }
}   






