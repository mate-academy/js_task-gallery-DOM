/* eslint-disable no-shadow */
/* eslint-disable no-console */
'use strict';

const largeImg = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', function(event) {
  const target = event.target;
  const imgSrc = target.getAttribute('src');

  event.preventDefault();
  largeImg.setAttribute('src', imgSrc);
});
