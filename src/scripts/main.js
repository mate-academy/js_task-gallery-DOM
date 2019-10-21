'use strict';

const galleryList = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');
const handler = function(e) {
  e.preventDefault();
  const link = e.target.closest('.list-item__link');
  largeImg.src = link.href;
  largeImg.alt = link.title;
};
galleryList.addEventListener('click', handler);
