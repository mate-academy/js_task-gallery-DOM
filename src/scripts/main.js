'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', function(el) {
  el.preventDefault();
  largeImg.src = el.target.closest('A').href;
});
