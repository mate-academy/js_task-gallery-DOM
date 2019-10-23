'use strict';

const occurrent = document.querySelector('#thumbs');
const bigPicture = document.querySelector('#largeImg');

occurrent.addEventListener('click', choose);

function choose(ev) {
  event.preventDefault();
  const target = ev.target;

  if (target.tagName !== 'IMG') {
    return;
  }

  bigPicture.src = target.parentNode.href;
  bigPicture.alt = target.alt;
}
