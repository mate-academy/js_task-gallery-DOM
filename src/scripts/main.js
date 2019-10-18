'use strict';

document.querySelector('#thumbs').onclick = (event1) => {
  const thumbnail = event1.target.closest('a');

  if (!thumbnail) {
    return;
  }
  showThumb(thumbnail.href, thumbnail.title);
  event1.preventDefault();
};

function showThumb(href, title) {
  document.querySelector('#largeImg').src = href;
  document.querySelector('#largeImg').alt = title;
}
