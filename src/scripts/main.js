'use strict';

const thumbs = document.querySelector('#thumbs');

function showSlide(e) {
  const largeImg = document.querySelector('#largeImg');
  const smallImg = e.target.closest('a');

  largeImg.src = smallImg.href;
  e.preventDefault();
}

thumbs.addEventListener('click', showSlide);
