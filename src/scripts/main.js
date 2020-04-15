'use strict';

thumbs.addEventListener("click", event => {
  event.preventDefault();
  const target = event.target;
  const link = target.closest("a");

  if(link) {
    show(link);
  }
})

function show(link) {
  largeImg.src = link.href;
  largeImg.alt = link.title;
}
