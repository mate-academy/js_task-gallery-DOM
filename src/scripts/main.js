'use strict';

const galeryList = document.querySelector('.gallery__list');

galeryList.onclick = function(arg) {
  const thumbnail = arg.target.closest('a');

  if (!thumbnail) {
    return;
  }
  showThumbnail(thumbnail.href, thumbnail.title);
  arg.preventDefault();
};

function showThumbnail(href, title) {
  const largeImg = document.getElementById('largeImg');

  largeImg.src = href;
  largeImg.alt = title;
}
