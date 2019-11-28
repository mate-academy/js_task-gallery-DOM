'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

const chooseThumbnail = (click) => {
  const chosen = click.target.closest('.list-item__link');

  if (!chosen || !thumbs.contains(chosen)) {
    return;
  }

  click.preventDefault();
  largeImg.src = chosen.href;
};

thumbs.addEventListener('click', chooseThumbnail);
