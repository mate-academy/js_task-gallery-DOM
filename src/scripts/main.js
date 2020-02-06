'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', () => {
  event.preventDefault();

  const thumbnail = event.target.closest('a');

  if (!thumbnail) {
    return;
  }

  largeImg.src = thumbnail.href;
});
