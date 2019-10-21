'use strict';

const largeImg = document.querySelector('#largeImg');

const changing = (link, thumb) => {
  largeImg.src = link;
  largeImg.alt = thumb;
};

const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (action) => {
  action.preventDefault();
  const clicked = action.target.closest('.list-item__link');
  changing(clicked.href, clicked.title);
});
