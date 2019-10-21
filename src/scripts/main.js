'use strict';

const item = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

item.addEventListener('click', (targetEvent) => {
  targetEvent.preventDefault();

  largeImage.src = targetEvent.target.closest('a').href;
  largeImage.alt = targetEvent.target.closest('a').title;
});
