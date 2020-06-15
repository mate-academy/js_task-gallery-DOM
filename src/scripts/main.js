'use strict';

const mainImage = document.getElementById('largeImg');

function changeImg() {
  mainImage.src = this.href;

  return false;
};

const imageList = document.getElementById('thumbs');

const imageListChildrens = imageList.getElementsByClassName('list-item__link');

for (const key of imageListChildrens) {
  key.onclick = changeImg;
};
