'use strict';

const largeImg = document.getElementById('largeImg');
const images = document.querySelectorAll('.gallery__thumb');

function getImage(e) {
  e.preventDefault();

  largeImg.src = e.target.src.replace('-thumb.jpeg', '.png');
};

for (const img of images) {
  img.addEventListener('click', getImage);
};
