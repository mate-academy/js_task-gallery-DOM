'use strict';

const list = document.querySelector('#thumbs');
const currentImg = document.querySelector('.gallery__large-img');

const handleListClick = ({ target }) => {
  event.preventDefault();

  const chosenImg = target.closest('a').href;

  currentImg.src = chosenImg;
};

list.addEventListener('click', handleListClick);
