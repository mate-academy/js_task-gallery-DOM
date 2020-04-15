'use strict';

const element = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

element.addEventListener('click', () => {
  const item = event.target.closest('a');

  if (!item) {
    return;
  }
  event.preventDefault();
  largeImg.src = item.href;
});
