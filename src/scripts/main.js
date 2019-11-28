'use strict';

const image = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', changeImage);

function changeImage(e) {
  if (e.target.className.includes('gallery__thumb')) {
    e.preventDefault();
  }

  image.src = e.target.parentNode.href;
  image.alt = e.target.list;
}
