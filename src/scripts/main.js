'use strict';

const allImages = document.querySelector('#thumbs');
const bigImg = document.querySelector('#largeImg');

allImages.addEventListener('click', (ev) => {
  ev.preventDefault();

  const newBigImg = ev.target.closest('.list-item__link');

  bigImg.src = newBigImg.href;
});
