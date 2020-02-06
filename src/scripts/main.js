'use strict';

const largeImage = document.querySelector('.gallery__large-img');
const thumb = document.querySelector('.gallery');

thumb.addEventListener('click', () => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  largeImage.src = item.href;
});
