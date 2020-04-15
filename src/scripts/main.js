'use strict';

const largeImag = document.querySelector('.gallery__large-img');
const galleriList = document.querySelector('.gallery__list');

galleriList.addEventListener('click', (events) => {
  if (events.target.closest('.list-item__link')) {
    events.preventDefault();
    largeImag.src = events.target.parentNode.href;
  }
});
