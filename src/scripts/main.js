'use strict';

const bigImg = document.querySelector('.gallery__large-img');

function replaceImg(e) {
  const { className: elemClass } = e.target;

  if (elemClass.includes('gallery__thumb')
    || elemClass.includes('list-item__link')) {
    e.preventDefault();

    const { href: elemHref } = e.target.closest('[href]');

    bigImg.setAttribute('src', elemHref);
  }
}

document.body.addEventListener('click', replaceImg);
