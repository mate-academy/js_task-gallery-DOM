'use strict';

const thumbs = document.querySelector('#thumbs');
const replaceableImage = document.querySelector('#largeImg');

thumbs.addEventListener('click', function(switcher) {
  switcher.preventDefault();

  replaceableImage.src = switcher.target.closest('a').href;
  replaceableImage.alt = switcher.target.closest('a').title;
});
