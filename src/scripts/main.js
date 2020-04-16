'use strict';

const ima = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

ima.addEventListener('click', (evt) => {
  if (evt.target.className.includes('gallery__thumb')) {
    evt.preventDefault();
    largeImg.src = evt.target.parentNode.href;
  }
});
