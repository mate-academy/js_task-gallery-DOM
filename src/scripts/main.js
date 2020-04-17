'use strict';

const handleMainImg = () => {
  const gallery = document.querySelector('.gallery');

  gallery.addEventListener('click', evnt => {
    const mainImg = document.querySelector('.gallery__large-img');
    const target = evnt.target.classList;

    if (target.contains('gallery__img')) {
      evnt.preventDefault();

      let img = evnt.target.src;

      img = img.replace('-thumb.jpeg', '.png');
      mainImg.src = img;
    };

    if (target.contains('list-item__link')) {
      evnt.preventDefault();

      let img = evnt.target.children[0].src;

      img = img.replace('-thumb.jpeg', '.png');
      mainImg.src = img;
    }
  });
};

handleMainImg();
