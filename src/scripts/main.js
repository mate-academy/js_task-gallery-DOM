'use strict';

const mainImg = document.getElementById('largeImg');
const listImg = document.getElementById('thumbs');

listImg.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();
  mainImg.src = clickEvent.target.closest('a').href;
  mainImg.alt = clickEvent.target.closest('a').title;
});
