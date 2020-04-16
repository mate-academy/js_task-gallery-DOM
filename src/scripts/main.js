'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const ul = document.querySelector('#thumbs');

function setPicture(currentLink) {
  largeImg.src = currentLink.href;
  largeImg.alt = currentLink.title;
}

ul.addEventListener('click', eventClick => {
  eventClick.preventDefault();

  const clickedElem = eventClick.target;
  const currentLink = clickedElem.closest('a');

  if (currentLink) {
    setPicture(currentLink);
  }
});
