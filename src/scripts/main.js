'use strict';

gallery();

function gallery() {
  const thumbs = document.body.querySelector('#thumbs');
  const largeImage = document.body.querySelector('#largeImg');

  thumbs.addEventListener('click', evt => {
    evt.preventDefault();
    largeImage.src = evt.target.closest('.list-item__link').href;
  });
}
