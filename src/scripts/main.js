'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.onclick = (action) => {
  const thumbnail = action.target.closest('.list-item__link');

  if (thumbnail) {
    action.preventDefault();
    largeImg.src = thumbnail.href;
    largeImg.alt = thumbnail.title;
  }
};
