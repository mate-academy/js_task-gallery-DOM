'use strict';

const thumbs = document.querySelector('ul');
const largeImg = document.querySelector('#largeImg');

function showImg(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}

thumbs.addEventListener('click', (ev) => {
  ev.preventDefault();

  const thumbnail = ev.target.closest('a');

  if (!thumbnail) {
    return;
  }
  showImg(thumbnail.href, thumbnail.title);
});
