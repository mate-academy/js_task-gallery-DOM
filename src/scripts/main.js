'use strict';

const galleryList = document.querySelector('.gallery__list');
const bigImage = document.querySelector('.gallery__large-img');

function changeImage(evt) {
  evt.preventDefault();

  const item = evt.target.closest('.list-item__link');
  const href = item.getAttribute('href');

  bigImage.setAttribute('src', href);
}

galleryList.addEventListener('click', changeImage);
