'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', eventOnClick => {
  eventOnClick.preventDefault();

  if (eventOnClick.target.tagName === 'IMG') {
    largeImg.src = eventOnClick.target.closest('a').href;
  }
});
