'use strict';

const bigImg = document.querySelector('.gallery__large-img');

function onImageClick(e) {
  const { target } = e;

  if (
    target.className.includes('gallery__thumb')
    || target.className.includes('list-item__link')
  ) {
    e.preventDefault();

    const { href } = target.closest('[href]');

    bigImg.setAttribute('src', href);
  }
}

document.body.addEventListener('click', onImageClick);
