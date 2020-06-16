'use strict';

const mainImage = document.querySelector('#largeImg');

function changeImg() {
  event.preventDefault();
  mainImage.src = this.href;
}

const imageLinks = document.querySelectorAll('.list-item__link');

for (const link of imageLinks) {
  link.addEventListener('click', changeImg);
}
