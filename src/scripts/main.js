'use strict';

const image = document.querySelector('#largeImg');
const galleryList = document.querySelector('#thumbs');

galleryList.addEventListener('click', changeImage);

function changeImage(e) {
  if (e.target.className.includes('gallery__thumb')) {
    e.preventDefault();
  }

  image.src = e.target.parentNode.href;
  image.alt = e.target.galleryList;
};
