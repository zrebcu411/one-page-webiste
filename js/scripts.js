const toggleIcon = document.querySelector('.button-toggle');
const nav = document.querySelector('.nav');
const navSearchInput = document.querySelector('.nav__input');
const buttonSearch = document.querySelector('.button-search');

function toggleOpen() {
  nav.classList.toggle('nav--open');
}

function searchOpen() {
  navSearchInput.classList.toggle('nav__input--visible');
}

toggleIcon.addEventListener('click', toggleOpen);
buttonSearch.addEventListener('click', searchOpen);

