'use strict';

window.addEventListener('scroll', e => {
  let nav = document.querySelector('.js-nav');

  const INTRO_HEIGHT = document.querySelector('.js-intro').offsetHeight;
  const NAV_HEIGHT = nav.offsetHeight;
  const SCROLLED_CLASS = 'top-menu_scrolled';

  if (document.body.scrollTop > INTRO_HEIGHT - NAV_HEIGHT) {
    if (!nav.classList.contains(SCROLLED_CLASS)) {
      nav.classList.add(SCROLLED_CLASS);
    }
  } else {
    nav.classList.remove(SCROLLED_CLASS)
  }
});
