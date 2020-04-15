'use strict';

const thumbs = document.querySelector('#thumbs');

const largeImg = document.querySelector('#largeImg');

const imgReplacer = (e) => {
  if (e.target.className.includes('gallery__thumb')) {
    e.preventDefault();
    largeImg.src = e.target.closest('.list-item__link').href;
  }
};

thumbs.addEventListener('click', imgReplacer);
