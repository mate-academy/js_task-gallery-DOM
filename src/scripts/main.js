'use strict';
const elements = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');
elements.addEventListener('click', (action) => {
  action.preventDefault();
  const element = action.target.closest('.list-item__link');
  largeImg.src = element.href;
});
