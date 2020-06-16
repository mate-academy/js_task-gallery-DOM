'use strict';

const smallImages = document.querySelectorAll('.gallery__thumb');
const largeImg = document.querySelector('#largeImg');

for (const smallImage of smallImages) {
  smallImage.onclick = function(e) {
    e.preventDefault();
    largeImg.src = smallImage.src.replace('-thumb.jpeg', '.png');
  };
};
