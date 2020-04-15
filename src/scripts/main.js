'use strict';

const ul = document.querySelector('.gallery__list');
const main = document.querySelector('.gallery__large-img');

ul.addEventListener('click', changeLink);

function changeLink() {
  event.preventDefault();

  const link = event.target.closest('a');

  main.src = link;
}
