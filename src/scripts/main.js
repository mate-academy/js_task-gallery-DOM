'use strict';

const galeryList = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

galeryList.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');

  if (!item) {
    return;
  }
  event.preventDefault();
  mainImg.src = item.href;
});
