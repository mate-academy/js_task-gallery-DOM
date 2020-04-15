'use strict';

const allImages = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

allImages.addEventListener('click', (customEvent) => {
  if (customEvent.target.className.includes('gallery__thumb')) {
    customEvent.preventDefault();
    largeImage.src = customEvent.target.parentNode.href;
  }
});
