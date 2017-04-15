const toggleIcon = document.querySelector('.button-toggle');
const buttonSearch = document.querySelector('.button-search');

function toggleOpen() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('nav--open');
  toggleIcon.setAttribute('aria-expanded', nav.classList.contains('nav--open'));
}

function searchOpen() {
  const navSearchInput = document.querySelector('.nav__input');
  navSearchInput.classList.toggle('nav__input--visible');
  buttonSearch.setAttribute('aria-expanded', navSearchInput.classList.contains('nav__input--visible'));
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
const root = $('html, body');

$('a').click(function() {
  let scrollsTop = window.pageYOffset || document.documentElement.scrollTop;
  
  //$(this).not('.logo__text').addClass('nav__link--active');
  $('.nav').removeClass('nav--open');
  const sectionToScroll = $.attr(this, 'href');
  //const a = $('.header').outerHeight();

  if (sectionToScroll != '#home') {
    root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top+2-16*4
    }, 500);
  }
  else {
    root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top-16*8
    }, 500);
  }
  return false;
});

//scrolling nav
const navLinks = document.querySelectorAll('.nav__link');
const headerContainer = document.querySelector('.header__container');
const mediaQuery = window.matchMedia('(max-width: 47.94rem)');

function changeNavItemActivation() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (headerContainer.offsetHeight/3 < scrollTop && !mediaQuery.matches) {
    headerContainer.classList.add('header--low');
  }
  else {
    headerContainer.classList.remove('header--low');
  }

  navLinks.forEach(function(link) {
    let currentLink = link;
    let refId = currentLink.getAttribute('href').slice(1);
    let refElement = document.getElementById(refId);

    if (refElement.offsetTop <= scrollTop && refElement.offsetTop + refElement.offsetHeight > scrollTop) {
      currentLink.classList.add('nav__link--active');
    }
    else {
      currentLink.classList.remove('nav__link--active');
    }
  });
}

document.addEventListener('scroll', changeNavItemActivation);
