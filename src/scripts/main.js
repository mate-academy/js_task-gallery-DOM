'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', function(e) {
  const link = e.target.closest('a');

  e.preventDefault();
  largeImg.attributes.src.value = link.href;
});
