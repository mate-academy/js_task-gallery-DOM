'use strict';

const largeImg = document.querySelector('#largeImg');
const linkCollections = document.querySelectorAll('.list-item__link');

for (const item of linkCollections) {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    largeImg.src = item.href;
  });
}
