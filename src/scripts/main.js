'use strict';

const bigPic = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', () => {
  event.preventDefault();

  const eventSrc = event.target.src;

  bigPic.src = eventSrc.replace(`-thumb.jpeg`, `.png`);
});
