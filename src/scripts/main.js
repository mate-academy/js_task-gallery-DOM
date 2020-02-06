'use strict';

const mainSlide = document.getElementById('largeImg');

mainSlide.parentElement.classList.add('gallery__image');

const handlerClick = function(e) {
  e.preventDefault();

  if (e.target.parentElement.tagName !== 'A') {
    return;
  }

  const src = e.target.parentElement.href;

  mainSlide.setAttribute('src', src);

  const arrayOfSlides = Array.from(this.querySelectorAll('.list-item'));

  arrayOfSlides.map(el => el.classList.remove('list-item--active'));
  e.target.parentElement.parentElement.classList.add('list-item--active');
};

document.addEventListener('click', handlerClick);
