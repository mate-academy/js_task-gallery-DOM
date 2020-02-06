'use strict';

let mainImage = document.querySelector('#largeImg');
const links = document.querySelectorAll('.list-item__link');

links.forEach(link => {
  link.addEventListener('click', (elem) => {
    elem.preventDefault();

    const imageToChange = link.attributes.href.value;

    mainImage.outerHTML = `<img id="largeImg"
    src="${imageToChange}"
    alt="main image"
    class="gallery__large-img gallery__img">`;

    mainImage = document.querySelector('#largeImg');
  });
});
