'use strict';

function showSmallImg() {
  event.preventDefault();
  document.getElementById('largeImg').src = this.href;
}

for (const elem of document.querySelectorAll('.list-item__link')) {
  elem.addEventListener('click', showSmallImg);
}
