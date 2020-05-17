'use strict';

const allImg = document.querySelector('#thumbs');
const bigImg = document.querySelector('#largeImg');

allImg.addEventListener('click', (ev) => {
  ev.preventDefault();

  const newBigImg = ev.target.closest('.list-item__link');

  bigImg.src = newBigImg.href;
});
