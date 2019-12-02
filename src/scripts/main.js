'use strict';

const mainImage = document.querySelector('.gallery__large-img');

document.body.querySelector('ul').addEventListener('click', changeOnClick);

function changeOnClick(ev) {
  ev.preventDefault();
  mainImage.src = ev.target.parentElement.href;
}
