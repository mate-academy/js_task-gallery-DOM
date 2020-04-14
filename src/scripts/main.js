'use strict';

const galleryImages = () => {
  const gallery = document.querySelector('.gallery');

  gallery.addEventListener('click', e => {
    const largeImg = document.querySelector('.gallery__large-img');
    const targetClass = e.target.classList;

    if (targetClass.contains('gallery__img')) {
      e.preventDefault();

      let item = e.target.src;

      item = item.replace('-thumb.jpeg', '.png');
      largeImg.src = item;
    };

    if (targetClass.contains('list-item__link')) {
      e.preventDefault();

      let item = e.target.children[0].src;

      item = item.replace('-thumb.jpeg', '.png');
      largeImg.src = item;
    }
  });
};

galleryImages();
