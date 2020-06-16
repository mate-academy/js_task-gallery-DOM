'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.getElementById('largeImg');

list.addEventListener('click', () => {
  event.preventDefault();

  const item = event.target.closest('.list-item');

  if (!item || !list.contains(item)) {
    return '';
  }

  largeImage.src = event.target.src.replace('-thumb.jpeg', '.png');
});
