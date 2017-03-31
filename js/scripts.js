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

const svgIcons = document.querySelectorAll('.socials__svg');
const svgPaths = document.querySelectorAll('.socials__path');

function fill() {
  const child = this.querySelector('.socials__path');
  child.classList.add('socials__path--filled');
}

function removeFill() {
  const child = this.querySelector('.socials__path');
  child.classList.remove('socials__path--filled');
}

svgIcons.forEach(svg => svg.addEventListener('mouseleave', removeFill));
svgIcons.forEach(svg => svg.addEventListener('mouseover', fill));