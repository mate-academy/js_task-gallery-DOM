'use strict';

const smallImages = document.querySelectorAll('.gallery__thumb');

for (const smallImage of smallImages) {
  smallImage.onclick = function() {
    switcher(this);
  };
}

function switcher(smallImage) {
  const fullImg = document.querySelector('#largeImg');

  fullImg.src = smallImage.src;
}
