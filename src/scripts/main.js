'use strict';

const gallery = document.querySelector('.gallery__list');
const bigImg = document.querySelector('#largeImg');

gallery.addEventListener('click', function() {
  event.preventDefault();

  const pictureSrc = event.target.getAttribute('src', '.list-item__link');
  const bigPictureSrc = pictureSrc.replace('-thumb.jpeg', '.png');

  bigImg.setAttribute('src', bigPictureSrc);
});
