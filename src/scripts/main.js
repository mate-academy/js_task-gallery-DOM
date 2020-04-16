'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const element = document.querySelector('.gallery__list');

element.addEventListener('click', (eventer) => {
  eventer.preventDefault();

  const link = eventer.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
