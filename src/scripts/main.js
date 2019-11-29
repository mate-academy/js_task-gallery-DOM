'use strict';

const image = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function() {
  if (event.target.className.includes('gallery__thumb')) {
    event.preventDefault();
    image.src = event.target.parentNode.href;
    image.title = event.target.parentNode.title;
    image.alt = 'main image';
  }
});
