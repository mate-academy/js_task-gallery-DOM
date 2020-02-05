'use strict';

const largeImg = document.querySelector('.gallery__large-img');

const list = document.querySelectorAll('.list-item__link');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function(ev) {
    ev.preventDefault();

    const img = this.getAttribute('href');

    largeImg.setAttribute('src', img);
  });
}
