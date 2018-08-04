(function () {
  var toggle = document.querySelector('.nav-toggle');
  // т.к. стрелка selecta имеет position absolute
  // она вылазит поверх бокового меню, z-index не помогает 
  // потому что они в разных блоках приходится применять небольшой хак
  var arrow = document.querySelector('.select-arrow');  
  toggle.addEventListener('click', function(e) {
    if(document.body.classList.contains('nav-opened')) {
      setTimeout(() => arrow.style.zIndex = 0, 100);
    }
    else {
      arrow.style.zIndex = -1;
    }
    document.body.classList.toggle('nav-opened');

  });
})();