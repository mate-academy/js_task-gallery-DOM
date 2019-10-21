'use strict';

const slideBlock = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

slideBlock.addEventListener('click', (e) => {
  e.preventDefault();
  const largePhoto = largeImg.src;
  const largeAlt = largeImg.alt;
  if (e.target.closest('li')) {
    largeImg.src = e.target.src;
    largeImg.alt = e.target.alt;
    e.target.src = largePhoto;
    e.target.alt = largeAlt;
  }
});
