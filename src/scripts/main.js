/* eslint-disable no-shadow */
'use strict';

const galleryList = document.querySelector('.gallery__list');

const hander = (event) => {
  event.preventDefault();

  const picture = event.target.closest('.list-item__link');
  const largeImg = document.querySelector('#largeImg');

  largeImg.src = picture.href;
};

galleryList.addEventListener('click', hander);
