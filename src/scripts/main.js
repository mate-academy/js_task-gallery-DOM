'use strict';

const clickableImages = document.querySelectorAll('.gallery__thumb');
const galleryLargeImage = document.querySelector('.gallery__img');

for (const thumbImage of clickableImages) {
  thumbImage.addEventListener('click', handler);
}

const imageLinks = document.querySelectorAll('.list-item__link');

for (const link of imageLinks) {
  link.addEventListener('click', (e) => e.preventDefault());
}

function handler(e) {
  galleryLargeImage.src = e.target.src.replace('-thumb.jpeg', '.png');
}
