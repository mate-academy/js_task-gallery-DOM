'use strict';
const largeImg = document.querySelector('.largeImg');
const thumbs = document.querySelector('.thumbs');

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}

thumbs.addEventListener('click', (event) => {
  const thumbnail = event.target.closest('.thumbs__link');

  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
});

