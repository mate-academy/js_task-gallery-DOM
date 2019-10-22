'use strict';

// console.log('hello mate academy!');

const elements = document.getElementsByClassName('list-item__link');

for (const element of elements) {
  element.addEventListener('click', (events) => {
    event.preventDefault();
    const bigImg = document.getElementById('largeImg');
    bigImg.src = event.target.parentElement.href;
  });
}
