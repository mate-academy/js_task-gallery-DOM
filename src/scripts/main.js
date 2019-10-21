'use strict';
const container = document.querySelector('#thumbs');

container.addEventListener('click', (action) => {
  action.preventDefault();
  if (action.target.parentNode.className !== 'list-item__link') {
    return;
  }
  const bigImg = document.querySelector('#largeImg');
  bigImg.src = action.target.parentNode.href;
  bigImg.alt = action.target.alt;
});
