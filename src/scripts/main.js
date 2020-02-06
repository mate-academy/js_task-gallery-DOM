'use strict';

const largeImg = document.querySelector('#largeImg');

document.querySelector('ul').addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();

  const currentLink = e.target.parentElement.href;

  largeImg.src = currentLink;
}
