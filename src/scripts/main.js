
'use strict';

const galeryList = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

galeryList.onclick = function(e) {
  event.preventDefault();

  const thumbnail = event.target.closest('a');

  if (!thumbnail) {
    return;
  }
  showThumbnail(thumbnail.href, thumbnail.title);
};

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
