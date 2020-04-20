'use strict';

const images = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

images.addEventListener('click', (ev) => {
  if (ev.target.className.includes('gallery__thumb')) {
    ev.preventDefault();
    largeImage.src = ev.target.parentNode.href;
  }
});
