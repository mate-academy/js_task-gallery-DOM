'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', showPicture);

function showPicture(incident) {
  const item = incident.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  incident.preventDefault();
  largeImg.src = item.href;
}
