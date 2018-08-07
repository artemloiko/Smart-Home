(function () {
  var toggle = document.querySelector('.nav-toggle');

  var arrow = document.querySelector('.select-arrow');  
  toggle.addEventListener('click', function(e) {
    document.body.classList.toggle('nav-opened');
  });
})();


if(window.innerWidth > 770) {
  const mainPS = new PerfectScrollbar('.content-main__cards', {
    suppressScrollX: true,
  });
  const devicesPS = new PerfectScrollbar('.content-devices__cards');
}
if(window.innerWidth > 600 && window.innerWidth < 1150) {
  const scenariosPS = new PerfectScrollbar('.content-scenarios__cards', {
    suppressScrollX: true,
  });
}