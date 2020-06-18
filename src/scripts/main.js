'use strict';

const galleryMain = document.querySelector('.gallery');
const mainImg = galleryMain.querySelector('#largeImg');
const list = galleryMain.querySelector('#thumbs');

function changeImg(changeEvent) {
  changeEvent.preventDefault();

  if (changeEvent.target.parentElement.tagName === 'A') {
    mainImg.src = changeEvent.target.parentElement.href;
  }
}

function overThumbs(overEvent) {
  if (overEvent.target.tagName === 'IMG') {
    overEvent.target.style.border = '3px solid cadetBlue';
  }
}

function outThumbs(outEvent) {
  if (outEvent.target.tagName === 'IMG') {
    outEvent.target.style.border = '1px solid cadetBlue';
  }
}

list.addEventListener('click', changeImg);
list.addEventListener('mouseover', overThumbs);
list.addEventListener('mouseout', outThumbs);
