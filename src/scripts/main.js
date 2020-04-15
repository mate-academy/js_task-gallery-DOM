'use strict';

const pictures = document.querySelector('.gallery__list');
const bigPicture = document.querySelector('#largeImg');

pictures.addEventListener('click', (evnt) => {
  evnt.preventDefault();

  const item = event.target.closest('a');

  bigPicture.src = item.href;
}
);
