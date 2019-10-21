'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (myEvent) => {
  myEvent.preventDefault();
  const clicked = myEvent.target.closest('.list-item__link');
  largeImg.src = clicked.href;
  largeImg.alt = clicked.title;
});
