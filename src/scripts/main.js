'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const imgList = document.querySelector('.gallery__list');

imgList.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (evt.target.classList.contains('gallery__thumb')) {
    mainImg.src = evt.target.parentNode.href;
  }
});
