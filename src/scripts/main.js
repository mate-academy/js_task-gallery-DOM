'use strict';
const mainContainer = document.getElementById('thumbs');
// eslint-disable-next-line no-shadow
mainContainer.addEventListener('click', event => {
  if (!event.target.closest('a')) {
    return;
  }
  event.preventDefault();
  const largeImage = document.getElementById('largeImg');
  largeImage.src = event.target.closest('a').href;
});
