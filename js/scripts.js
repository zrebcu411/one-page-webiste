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

// smooth scrolling
const root = $('html, body');
const navLowHeight = 16 * 4; // 16px(root) * 4rem(nav--low);

const mediaQuery = window.matchMedia('(max-width: 47.94rem)');

// root px font-size * header rem font-size
const headerLowHeight = mediaQuery.matches? 16 * 3 :  16 *  4

$('a').click(function(e) {

  $('.nav').removeClass('nav--open');

  e.preventDefault();
  const href = $.attr(this, 'href');
  root.animate({
    scrollTop: $(href).offset().top + 2 - headerLowHeight
  }, 500, function() {
    location.hash = href;
  });
  return false;
});

//scrolling nav
const navLinks = document.querySelectorAll('.nav__link');
const headerContainer = document.querySelector('.header__container');
const test = document.querySelectorAll('.hidden');
console.log(test);

function changeNavItemActivation() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollBottom = scrollTop + window.innerHeight;

  if (headerContainer.offsetHeight / 3 < scrollTop) {
    headerContainer.classList.add('header--low');
  }
  else {
    headerContainer.classList.remove('header--low');
  }

  navLinks.forEach(function(link) {
    let currentLink = link;
    let refId = currentLink.getAttribute('href').slice(1);
    let refElement = document.getElementById(refId);

    if (refElement.offsetTop <= scrollTop + navLowHeight && refElement.offsetTop + refElement.offsetHeight > scrollTop + navLowHeight) {
      currentLink.classList.add('nav__link--active');
    }
    else {
      currentLink.classList.remove('nav__link--active');
    }
  });

  test.forEach(function(elem) {
    console.log(elem.offsetTop, elem.offsetHeight, scrollBottom);
    if (elem.offsetTop + elem.offsetHeight / 2  <= scrollBottom) {
      elem.classList.remove('hidden');
    }
  });
}

document.addEventListener('scroll', changeNavItemActivation);
