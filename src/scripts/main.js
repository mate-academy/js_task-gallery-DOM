'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', showThumbnail);

function showThumbnail(href) {
  const thumbnail = event.target.closest('.list-item__link');

  if (!thumbnail) {
    return;
  }

  largeImg.src = thumbnail.href;

  event.preventDefault();
}
