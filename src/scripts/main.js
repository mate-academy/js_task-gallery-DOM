'use strict';

const images = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

function imageChanger() {
  event.preventDefault();
  mainImage.src = event.target.src.replace('-thumb.jpeg', '.png');
}

images.addEventListener('click', imageChanger);
