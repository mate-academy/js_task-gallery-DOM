'use strict';

const ul = document.querySelector('.gallery__list');

ul.onclick = function(clickEvent) {
  const target = clickEvent.target.closest('a');

  clickEvent.preventDefault();

  if (target.tagName === 'A') {
    changeImg(target);
  }
};

function changeImg(link) {
  const img = document.querySelector('.gallery__large-img');

  img.src = link.getAttribute('href');
}
