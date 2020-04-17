'use strict';

const galleryList = document.querySelector('.gallery__list');

const hander = callback => {
  callback.preventDefault();

  const picture = callback.target.closest('.list-item__link');
  const largeImg = document.querySelector('#largeImg');

  largeImg.src = picture.href;
};

galleryList.addEventListener('click', hander);
