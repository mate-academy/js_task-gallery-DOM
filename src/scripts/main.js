'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function(e) {
  const thumbnail = event.target.closest('a');

  if (!thumbnail) {
    return;
  }
  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
});

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
