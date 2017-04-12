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

//slider
const slides = document.querySelectorAll('.slider__slide');
const nextSlideButton = document.querySelector('.slider__button-right');
const prevSlideButton = document.querySelector('.slider__button-left');

let current = 0;

function goToSlide(n) {
  slides[current].classList.remove('slider__slide--active');
  current = (n + slides.length)%slides.length;
  slides[current].classList.add('slider__slide--active');
}

function playSlide() {
  goToSlide(current + 1);
}

function nextSlide() {
  clearInterval(slideTimer);
  goToSlide(current + 1);
}

function prevSlide() {
  clearInterval(slideTimer);
  goToSlide(current - 1);
}

let slideTimer = setInterval(playSlide, 3500);
nextSlideButton.addEventListener('click', nextSlide);
prevSlideButton.addEventListener('click', prevSlide);

//scrolling
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});

