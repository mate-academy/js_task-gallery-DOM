'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const element = document.querySelector('.gallery__list');

element.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
