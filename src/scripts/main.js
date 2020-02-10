'use strict';

const mainSlide = document.getElementById('largeImg');

mainSlide.parentElement.classList.add('gallery__image');

let currentElement = null;

const handlerClick = function(e) {
  e.preventDefault();

  if (e.target.parentElement.tagName !== 'A') {
    return;
  }

  const src = e.target.parentElement.href;

  mainSlide.setAttribute('src', src);

  currentElement && currentElement.classList.remove('list-item--active');
  e.target.closest('.list-item').classList.add('list-item--active');
  currentElement = e.target.closest('.list-item');
};

document.addEventListener('click', handlerClick);
