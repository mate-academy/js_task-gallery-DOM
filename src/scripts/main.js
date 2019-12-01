'use strict';

const galleryList = document.querySelector('.gallery')
  .querySelector('.gallery__list');

const galleryLargeImg = document.querySelector('.gallery')
  .querySelector('.gallery__large-img');

galleryList.addEventListener('click', (myevent) => {
  myevent.preventDefault();

  if (event.target.matches('.gallery__thumb')) {
    galleryLargeImg.setAttribute('src', `${myevent.target.src
      .split('-thumb.jpeg').join('.png')}`);
  }
});
