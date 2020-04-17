'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

const hander = e => {
  e.preventDefault();

  const picture = e.target.closest('.list-item__link');

  if (picture) {
    largeImg.src = picture.href;
  }
};

galleryList.addEventListener('click', hander);
