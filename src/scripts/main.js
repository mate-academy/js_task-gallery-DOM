'use strict';

function changer(ev) {
  ev.preventDefault();
  largeImg.src = event.target.src;
}

const largeImg = document.querySelector('.gallery__large-img');
const container = document.querySelector('.gallery__list');

container.addEventListener('click', changer, false);
