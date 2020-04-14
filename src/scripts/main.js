'use strict';

const gallery = document.querySelector('.gallery');
const largeImage = gallery.querySelector('#largeImg');
const galleryList = gallery.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.gallery__item');

  if (!item || !galleryList.contains(item)) {
    return;
  }

  const imageSrc = (e.target.src).replace('-thumb', '')
    .replace('.jpeg', '.png');

  largeImage.src = imageSrc;
});
