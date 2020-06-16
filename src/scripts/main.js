'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', changeMainPhoto);

function changeMainPhoto(e) {
  e.preventDefault();

  const link = e.target.closest('a');

  largeImage.setAttribute('src', link.href);
}
