'use strict';

const list = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');

list.onclick = function(events) {
  const listItem = event.target.closest('a');

  if (!listItem) {
    return;
  };

  showedImage(listItem.href, listItem.title);
  event.preventDefault();
};

function showedImage(link, title) {
  mainImage.src = link;
  mainImage.alt = title;
};
