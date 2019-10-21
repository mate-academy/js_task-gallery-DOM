'use strict';
const container = document.querySelector('#thumbs');

container.addEventListener('click', (evenT) => {
  evenT.preventDefault();
  if (evenT.target.parentNode.className !== 'list-item__link') {
    return;
  }
  const bigImg = document.querySelector('#largeImg');
  bigImg.src = evenT.target.parentNode.href;
});


