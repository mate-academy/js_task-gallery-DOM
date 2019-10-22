'use strict';

gallery();

function gallery() {
  const navLinks = document.body.querySelectorAll('.list-item__link');
  const largeImage = document.body.querySelector('#largeImg');

  for (const navLink of navLinks) {
    navLink.addEventListener('click', evt => {
      evt.preventDefault();
      largeImage.src = navLink.href;
    });
  }
}
