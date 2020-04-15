'use strict';

const mainImg = document.querySelector('#largeImg');
const galeryImg = document.querySelector('.gallery__list');

galeryImg.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  e.preventDefault();
  mainImg.src = item.href;
});
