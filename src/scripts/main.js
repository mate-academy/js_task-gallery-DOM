'use strict';

const image = document.querySelector('#largeImg');
const galleryList = document.querySelector('#thumbs');

galleryList.addEventListener('click', changeImage);

function changeImage(e) {
  e.preventDefault();

  image.src = e.target.closest('a').href;
  image.alt = e.target.galleryList;
};
