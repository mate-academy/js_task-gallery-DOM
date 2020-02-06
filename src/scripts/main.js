'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', () => {
  event.preventDefault();

  const itemLink = event.target.closest('.list-item__link');

  largeImage.src = itemLink.href;
});
