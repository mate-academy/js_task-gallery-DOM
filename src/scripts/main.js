'use strict';

const galery = [...document.querySelectorAll('.gallery__thumb')];
const bigImg = document.querySelector('#largeImg');

galery.forEach(picture => {
  picture.addEventListener('click', function(elem) {
    elem.preventDefault();

    const pictureSrc = picture.getAttribute('src', picture);

    bigImg.setAttribute('src', pictureSrc);
  });
});
