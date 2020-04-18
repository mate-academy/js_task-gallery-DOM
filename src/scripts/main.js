'use strict';

const gallery = document.querySelector('.gallery');
const galleryMain = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  if (e.target.classList.contains('gallery__img')) {
    e.preventDefault();

    const str = e.target.src.replace('-thumb.jpeg', '.png');

    galleryMain.src = str;
  }
});
