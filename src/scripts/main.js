'use strict';

const slideBlock = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

slideBlock.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.closest('li')) {
    largeImg.src = e.target.parentNode.href;
    largeImg.alt = e.target.alt;
  }
});
