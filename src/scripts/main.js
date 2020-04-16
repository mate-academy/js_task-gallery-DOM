'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.getElementById('thumbs');

gallery.addEventListener('click', (events) => {
  event.preventDefault();

  const currentElemHref = event.target.closest('.list-item__link').href;

  largeImg.src = currentElemHref;
});
