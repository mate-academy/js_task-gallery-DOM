'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

const imgReplacer = (element) => {
  if (element.target.classList.contains('gallery__thumb')) {
    element.preventDefault();
    largeImg.src = element.target.closest('.list-item__link');
  }
};

thumbs.addEventListener('click', imgReplacer);
