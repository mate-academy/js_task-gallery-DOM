'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function(e) {
  if (e.target.className.includes('gallery__thumb')) {
    e.preventDefault();
    largeImg.src = e.target.parentNode.href;
  }
});
