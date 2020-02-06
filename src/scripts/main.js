'use strict';

const thumbs = document.querySelector('#thumbs');

function showSlide(e) {
  e.preventDefault();

  const largeImg = document.querySelector('#largeImg');
  const smallImg = e.target.closest('a');

  largeImg.src = smallImg.href;
}

thumbs.addEventListener('click', showSlide);
