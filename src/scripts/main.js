'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');
const showThumbnail = (href, title) => {
  largeImg.src = href;
  largeImg.alt = title;
};
const switchImg = (e) => {
  const thumbnail = e.target.closest('a');

  if (!thumbnail) {
    return;
  }
  showThumbnail(thumbnail.href, thumbnail.title);
  e.preventDefault();
};

thumbs.addEventListener('click', switchImg);
