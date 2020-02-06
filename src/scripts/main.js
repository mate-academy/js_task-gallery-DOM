'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', () => {
  event.preventDefault();

  const smallImage = event.target.closest('.list-item__link');

  largeImg.src = smallImage.href;
});
