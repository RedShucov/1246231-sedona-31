document.querySelector('.hotel-search__pop-up').classList.add('js-active');

let hidden = document.querySelector('.hotel-search__pop-up');
let showButton = document.querySelector('.hotel-search_button-search');

showButton.onclick = function() {
  hidden.classList.toggle('js-active');
};
