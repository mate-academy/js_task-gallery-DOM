'use strict';

const largeImg = document.querySelector('#largeImg');
const smallImgs = document.querySelector('#thumbs');

smallImgs.addEventListener('click', (eve) => {
  const item = eve.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  eve.preventDefault();
  largeImg.src = item.href;
});
