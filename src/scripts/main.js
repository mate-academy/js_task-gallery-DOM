'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('.gallery__large-img');

thumbs.addEventListener('click', (e) => {
  if (e.target.className.includes('gallery__thumb')) {
    e.preventDefault();
    largeImg.src = e.target.parentElement.href;
  }
});
