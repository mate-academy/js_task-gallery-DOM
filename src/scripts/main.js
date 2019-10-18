'use strict';

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}

thumbs.onclick = function(event) {
  let thumbnail = event.target.closest('a');

  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
};
