'use strict';

const imagesList = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

function changeImg(href, title) {
  mainImg.src = href;
  mainImg.alt = title;
}

imagesList.addEventListener('click', (e) => {
  const image = e.target.closest('a');

  changeImg(image.href, image.title);
  e.preventDefault();
});
