'use strict';

const largeImg = document.querySelector('#largeImg');
const smallImg = document.querySelectorAll('.gallery__thumb');
const imgLink = document.querySelectorAll('.list-item__link');

function removeLink(item) {
  let i = 0;

  do {
    item[i].href = '#';
    i++;
  } while (i < item.length);
}

removeLink(imgLink);

function addOnclick() {
  let i = 0;

  do {
    smallImg[i].onclick = function() {
      largeImg.src = this.src;
    };

    i++;
  } while (i < smallImg.length);
}

addOnclick(smallImg);
