'use strict';

const gallery = document.querySelector('.gallery');
const largeImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', () => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImage.src = item.href;
});
