/* eslint-disable no-console */
'use strict';

// eslint-disable-next-line no-console
console.log('hello mate academy!');

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', click => {
  click.preventDefault();

  const largeImg = click.target.closest('.gallery').querySelector('#largeImg');

  largeImg.src = click.target.closest('a').getAttribute('href');
});
