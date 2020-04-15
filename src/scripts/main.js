'use strict';

const ul = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

function handler() {
  event.preventDefault();

  const targetHref = event.target.parentElement.href;

  if (largeImg.src !== targetHref
    && event.target.classList.contains('gallery__thumb')) {
    largeImg.src = targetHref;
  }
}
ul.addEventListener('click', handler);
