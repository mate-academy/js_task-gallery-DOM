'use strict';

const ul = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

ul.addEventListener('click', function(ev) {
  ev.preventDefault();

  const li = ev.target.closest('li');

  if (!li || !ul.contains(li)) {
    return;
  }
  largeImg.src = li.firstElementChild.href;
});
