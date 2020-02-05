'use strict';

const thumbnails = document.getElementById('thumbs');
const largeImg = document.querySelector('.gallery__large-img');

thumbnails.addEventListener('click', (ev) => {
  if (ev.target.className.includes('gallery__thumb')) {
    ev.preventDefault();
    largeImg.src = ev.target.parentNode.href;
  }
});
