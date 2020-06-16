'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', changeMainPhoto);

function changeMainPhoto(e) {
  e.preventDefault();

  const image = e.target;

  if (e.target.tagName !== 'IMG') {
    return;
  }

  const path = image.getAttribute('src');
  const newPath = path.slice(0, -11) + '.png';

  largeImage.setAttribute('src', newPath);
}
