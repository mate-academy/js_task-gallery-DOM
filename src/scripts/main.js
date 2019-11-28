'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function(block) {
  if (block.target.className.includes('gallery__thumb')) {
    block.preventDefault();
    largeImg.src = block.target.parentNode.href;
  }
});
