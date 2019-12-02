'use strict';

const list = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

list.onclick = el => {
  const thumbnail = el.target.closest('a');

  if (!thumbnail) {
    return;
  }
  el.preventDefault();
  mainImage.src = thumbnail.href;
  mainImage.alt = thumbnail.title;
};
