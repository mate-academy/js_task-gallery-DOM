'use strict';

const list = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

list.onclick = function(action) {
  const thumbnail = action.target.closest('a');

  if (!thumbnail) {
    return;
  }
  mainImage.src = thumbnail.href;
  mainImage.alt = thumbnail.title;
  event.preventDefault();
};
