'use strict';

const list = document.querySelector('#thumbs');
const img = document.querySelector('#largeImg');

const changeImg = (event) => {
  const item = event.target.closest('.list-item__link');

  event.preventDefault();
  img.src = item.href;
};

list.addEventListener('click', changeImg);
