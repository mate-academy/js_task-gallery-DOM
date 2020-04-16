'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (passage) => {
  passage.preventDefault();

  const target = passage.target;

  largeImg.src = target.src;
});
