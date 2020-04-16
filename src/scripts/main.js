'use strict';

const mainImg = document.querySelector('#largeImg');

const images = document.querySelector('#thumbs');

images.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName !== 'IMG') {
    return;
  }

  const smallImg = e.target.closest('a');

  mainImg.src = smallImg.href;
  mainImg.title = smallImg.title;
});
