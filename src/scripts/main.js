'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const ul = document.querySelector('#thumbs');
// const li = document.querySelector('.list-item');

function mainPicture(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}

ul.onclick = function(eventClick) {
  const clickedLink = eventClick.target.closest('a');

  if (!clickedLink) {
    return false;
  }

  mainPicture(clickedLink.href, clickedLink.title);
  eventClick.preventDefault();
};
