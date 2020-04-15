'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.querySelector('.gallery__list');

thumbs.addEventListener('click', (localEvent) => {
  const target = localEvent.target.closest('a');

  if (target.tagName === 'A') {
    localEvent.preventDefault();
    changeImage(target);
  }
});

function changeImage(target) {
  largeImg.src = target.href;
}
