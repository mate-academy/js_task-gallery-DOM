'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  const target = e.target.closest('A');
  const thumbHref = target.getAttribute('href');
  const largeImg = document.getElementById('largeImg');

  e.preventDefault();

  if (!gallery.contains(target)) {
    // eslint-disable-next-line no-useless-return
    return;
  }

  changeHref(thumbHref);

  function changeHref(href) {
    largeImg.src = thumbHref;
  }
});
