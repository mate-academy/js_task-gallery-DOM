'use strict';

const thumbs = document.getElementById('thumbs');
const bigImg = document.getElementById('largeImg');

thumbs.addEventListener('click', e => {
  e.preventDefault();

  const closestParent = e.target.closest('a');

  bigImg.src = closestParent.href;
});
