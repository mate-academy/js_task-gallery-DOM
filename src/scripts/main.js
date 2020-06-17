'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', e => {
  e.preventDefault();

  const src = e.target.closest('a').getAttribute('href');

  largeImg.setAttribute('src', src);
});
