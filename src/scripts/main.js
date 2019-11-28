'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');
const imageChanger = (ev) => {
  if (ev.target.className.includes('gallery__thumb')) {
    ev.preventDefault();
    largeImg.src = ev.target.parentElement.href;
    largeImg.alt = ev.target.alt;
  }
};

thumbs.addEventListener('click', imageChanger);
