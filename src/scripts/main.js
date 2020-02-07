'use strict';

const mainImage = document.querySelector('#largeImg');
const links = document.querySelectorAll('.list-item__link');

links.forEach(link => {
  link.addEventListener('click', (elem) => {
    elem.preventDefault();

    mainImage.setAttribute('src', elem.currentTarget.getAttribute('href'));
  });
});
