'use strict';

const galleryList = document.querySelector('.gallery__list');
const mainImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', () => {
  event.preventDefault();
  mainImg.src = event.target.src.replace('-thumb.jpeg', '.png');
});
