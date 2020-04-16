'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

const hander = (callback) => {
  callback.preventDefault();

  const picture = callback.target.closest('.list-item__link');

  largeImg.src = picture.href;
};

galleryList.addEventListener('click', hander);
