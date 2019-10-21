'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (action) => {
  const thumbNail = action.target.closest('a');

  if (!thumbNail) {
    return;
  }
  showThumb(thumbNail.href, thumbNail.title);
  action.preventDefault();
});

function showThumb(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
