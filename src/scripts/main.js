'use strict';

const image = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', ev => {
  ev.preventDefault();

  if (ev.target.tagName === 'A') {
    image.src = ev.target.href;
  } else {
    image.src = ev.target.parentElement.href;
  }
});
