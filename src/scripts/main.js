'use strict';
const mainContainer = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');
mainContainer.addEventListener('click', (eventTarget) => {
  eventTarget.preventDefault();
  largeImage.src = eventTarget.target.closest('a').href;
  largeImage.alt = eventTarget.target.closest('a').title;
});
