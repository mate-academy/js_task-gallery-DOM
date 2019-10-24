'use strict';
const container = document.querySelector('#thumbs');
const bigImage = document.querySelector('#largeImg');

function changeImg(action) {
  action.preventDefault();
  if (action.target.className === 'gallery__img gallery__thumb') {
    bigImage.src = action.target.parentElement.href;
  }
  if (action.target.className === 'list-item__link') {
    bigImage.src = action.target.href;
  }
}
container.addEventListener('click', changeImg);
