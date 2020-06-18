'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const pattern = 'list-item__link';

  if (e.target.parentElement.classList.contains(pattern)) {
    largeImg.src = e.target.src.replace('-thumb.jpeg', '.png');
  }
});
