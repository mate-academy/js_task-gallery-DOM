'use strict';

const galleryList = document.querySelector('.gallery__list');
const galleryLargeImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', changeLargeImage);

function changeLargeImage(action) {
  action.preventDefault();

  const link = action.target.closest('a');

  galleryLargeImage.setAttribute('src', link.href);
}
