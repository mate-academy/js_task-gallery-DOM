'use strict';
const mainContainer = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');
mainContainer.addEventListener('click', (eventTarg) => {
  eventTarg.preventDefault();
  largeImage.src = eventTarg.target.closest('a').href;
  largeImage.alt = eventTarg.target.closest('a').title;
});
