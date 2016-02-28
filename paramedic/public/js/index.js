'use strict';

window.addEventListener('scroll', function (e) {
  var nav = document.querySelector('.js-nav');

  var INTRO_HEIGHT = document.querySelector('.js-intro').offsetHeight;
  var NAV_HEIGHT = nav.offsetHeight;
  var SCROLLED_CLASS = 'top-menu_scrolled';

  if (document.body.scrollTop > INTRO_HEIGHT - NAV_HEIGHT) {
    nav.classList.add(SCROLLED_CLASS);
  } else {
    nav.classList.remove(SCROLLED_CLASS);
  }
});