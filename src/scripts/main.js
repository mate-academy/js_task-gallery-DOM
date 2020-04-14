'use strict';

const images = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

images.addEventListener('click', (evt) => {
  if (evt.target.className.includes('gallery__thumb')) {
    evt.preventDefault();
    largeImage.src = evt.target.parentNode.href;
  }
});
