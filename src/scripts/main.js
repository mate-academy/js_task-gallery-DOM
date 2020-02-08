'use strict';

const gallery = document.querySelector('.gallery__list');
const domainPicture = document.querySelector('#largeImg');
const galleryListFlex = document.querySelector('.gallery__list');
const imgBorder = document.querySelectorAll('img');

imgBorder.forEach(item => {
  item.style.border = '1px solid #d2d2d2';
  item.style.padding = '2.5px';
  item.style.marginRight = '2.5px';
});

galleryListFlex.style.display = 'flex';
domainPicture.style.display = 'block';
domainPicture.style.margin = '20px auto';

const gofunc = function() {
  event.preventDefault();

  const src = event.target.getAttribute('src');
  let newSrc = src.split('-');

  newSrc.pop();
  newSrc = newSrc.join('-') + '.png';
  domainPicture.setAttribute('src', newSrc);
};

gallery.addEventListener('click', gofunc);
