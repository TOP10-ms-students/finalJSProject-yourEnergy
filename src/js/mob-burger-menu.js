const backdrop = document.querySelector('.js-menu-backdrop');
const mobMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const mobMenuLinks = document.querySelectorAll('.js-menu-link, .js-close-menu');

function toggleMenu() {
  const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobMenu.classList.toggle('is-open');
  backdrop.classList.toggle('is-hidden');
}

function handlerBackdrop({ target }) {
  if (!target.closest('#mob-menu')) {
    toggleMenu();
  }
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
mobMenuLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});

backdrop.addEventListener('click', handlerBackdrop);

//.
/* mobMenu.addEventListener('click', event => {
  if (!event.target.classList.contains('menu-container')) {
    toggleMenu();
  }
}); */
