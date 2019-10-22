'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  if (e.target.classList.contains('gallery__img')) {
    const img = e.target.closest('a');
    e.preventDefault();
    largeImg.src = img.href;
    largeImg.alt = img.title;
  }
});
