'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.getElementById('thumbs');

gallery.addEventListener('click', (events) => {
  events.preventDefault();

  const currentElemHref = events.target.closest('.list-item__link').href;

  largeImg.src = currentElemHref;
});
