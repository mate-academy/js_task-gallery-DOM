'use strict';

const largeImg = document.querySelector('#largeImg');
const smallImgs = document.querySelector('#thumbs');

const chooseSmallImg = (click) => {
  const chosen = click.target.closest('.list-item__link');

  if (!chosen || !smallImgs.contains(chosen)) {
    return;
  }

  click.preventDefault();
  largeImg.src = chosen.href;
};

smallImgs.addEventListener('click', chooseSmallImg);
