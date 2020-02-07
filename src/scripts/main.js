'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const imgsList = document.querySelector('.gallery__list');

function clickHandler(e) {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    largeImg.src = e.target.closest('a').href;
  }
}

imgsList.addEventListener('click', clickHandler);
