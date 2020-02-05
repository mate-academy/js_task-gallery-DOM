'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImage = document.querySelector('.gallery__large-img');

thumbs.addEventListener('click', function() {
  event.preventDefault();

  const item = event.target.closest('a');

  largeImage.src = item.href;
});
