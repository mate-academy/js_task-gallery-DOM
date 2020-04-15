'use strict';

const galleryList = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

galleryList.addEventListener('click', showImg);

function showImg(e) {
  const itemLink = e.target.closest('.list-item__link');

  if (!itemLink) {
    return;
  };

  largeImg.src = itemLink.href;

  e.preventDefault();
}
