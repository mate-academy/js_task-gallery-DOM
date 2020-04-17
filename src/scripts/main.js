'use strict';

const handleMainImg = () => {
  const thumbs = document.querySelector('#thumbs');

  thumbs.addEventListener('click', evnt => {
    evnt.preventDefault();

    const largeImg = document.querySelector('#largeImg');
    const img = evnt.target.closest('.list-item__link');

    if (!img) {
      return;
    }

    largeImg.src = img.href;
  });
};

handleMainImg();
