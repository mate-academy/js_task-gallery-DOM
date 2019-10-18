'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (action) => {
  action.preventDefault();
  const clicked = action.target.closest('.list-item__link');
  chenging(clicked.href, clicked.title);
});

function chenging(link, title) {
  largeImg.src = link;
  largeImg.alt = title;
}
