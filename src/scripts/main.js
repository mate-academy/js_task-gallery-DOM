'use strict';

const gallery = document.querySelector('.gallery');
const largeImage = document.querySelector('.gallery__large-img');

function selectPicture() {
  event.preventDefault();
  largeImage.setAttribute('src', event.target.closest('.list-item__link').href);
}

gallery.addEventListener('click', selectPicture);
