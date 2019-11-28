'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.onclick = function(ev) {
  const thumbnail = ev.target.closest('a');

  if (!thumbnail) {
    return;
  }
  ev.preventDefault();
  largeImg.src = thumbnail.href;
  largeImg.alt = thumbnail.title;
};
