'use strict';

const change = (e) => {
  const image = e.target.closest('a').href;

  if (!image) {
    return;
  }

  e.preventDefault();

  document.getElementById('largeImg').src = image;
};

document.getElementById('thumbs').addEventListener('click', change);
