'use strict';

const gallery = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

function changePicture(e) {
  e.preventDefault();

  const itemLink = e.target.closest('.list-item__link');

  if (!itemLink) {
    return;
  };

  largeImg.src = itemLink;
};

gallery.addEventListener('click', changePicture);
