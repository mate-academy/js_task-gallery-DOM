'use strict';

const handleMainImg = () => {
  const gallery = document.querySelector('.gallery');

  gallery.addEventListener('click', evnt => {
    const largeImg = document.querySelector('.gallery__large-img');
    const target = evnt.target.classList;

    if (target.contains('gallery__img')) {
      evnt.preventDefault();

      let img = evnt.target.src;

      img = img.replace('-thumb.jpeg', '.png');
      largeImg.src = img;
    };

    if (target.contains('list-item__link')) {
      evnt.preventDefault();

      let img = evnt.target.children[0].src;

      img = img.replace('-thumb.jpeg', '.png');
      largeImg.src = img;
    }
  });
};

handleMainImg();
