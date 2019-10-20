'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.getElementById('thumbs');

gallery.addEventListener('click', function(e) {
  if (e.target.classList.contains('gallery__img')) {
    const img = e.target;
    e.preventDefault();
    largeImg.src = img.parentNode.href;
  }
});
