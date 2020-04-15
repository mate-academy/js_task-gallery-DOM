'use strict';

const largeImg = document.querySelector('#largeImg');
const listOfImg = document.querySelector('.gallery__list');

function clickChange(arg) {
  arg.preventDefault();

  if (arg.target.tagName === 'IMG') {
    largeImg.src = arg.target.closest('a').href;
  }
}

listOfImg.addEventListener('click', clickChange);
