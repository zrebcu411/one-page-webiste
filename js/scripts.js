const toggleIcon = document.querySelector('.toggle-icon');
const nav = document.querySelector('.nav');

function toggleOpen() {
  nav.classList.toggle('nav--open');
}

toggleIcon.addEventListener('click', toggleOpen);