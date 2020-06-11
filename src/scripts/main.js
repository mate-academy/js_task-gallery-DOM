'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains('list-item__link')) {
    largeImg.src = e.target.src.replace('-thumb.jpeg', '.png');
  }
});
