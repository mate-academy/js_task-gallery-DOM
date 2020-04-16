'use strict';

const galleryLargeImage = document.querySelector('.gallery__img');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', handler);

function handler(e) {
  const item = e.target.closest('.list-item__link');

  e.preventDefault();
  galleryLargeImage.src = item.href;
}
