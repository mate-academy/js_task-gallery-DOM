'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('.gallery__large-img');

thumbs.addEventListener('click', () => {
  if (event.target.className.includes('gallery__thumb')) {
    event.preventDefault();
    largeImg.src = event.target.parentElement.href;
  }
});
