'use strict';

const mainImage = document.querySelector('#largeImg');
const smallImages = document.querySelector('#thumbs');

smallImages.addEventListener('click', function(e) {
  const target = e.target;
  const imageSource = target.closest('a').getAttribute('href');

  e.preventDefault();

  mainImage.setAttribute('src', imageSource);
});
