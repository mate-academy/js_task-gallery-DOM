'use strict';

const list = document.querySelector('#thumbs');
const bigPicture = document.querySelector('#largeImg');

list.addEventListener('click', choose, false);

function choose(occurrence) {
  event.preventDefault();

  const target = occurrence.target;

  if (target.tagName !== 'IMG') {
    return;
  }

  bigPicture.src = target.parentNode.href;
  bigPicture.alt = target.alt;
}
