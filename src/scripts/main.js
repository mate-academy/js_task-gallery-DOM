'use strict';

const largeImg = document.querySelector('.gallery__large-img');

const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', function(e) {
  e.preventDefault();

  if (e.target.className === 'gallery__img gallery__thumb') {
    largeImg.src = e.target.src.replace('-thumb.jpeg', '.png');
  }
});
