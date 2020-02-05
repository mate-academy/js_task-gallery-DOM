'use strict';

const bigImg = document.querySelector('.gallery__large-img');

function replaceImg(e) {
  if (e.target.className.includes('gallery__thumb')
    || e.target.className.includes('list-item__link')) {
    e.preventDefault();

    const currentSource = e.target.getAttribute('src')
      || e.target.getAttribute('href');

    bigImg.setAttribute('src', currentSource);
  }
}

document.body.addEventListener('click', replaceImg);
