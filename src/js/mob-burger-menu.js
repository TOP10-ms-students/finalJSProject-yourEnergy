const backdrop = document.querySelector('.js-menu-backdrop');
const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const mobMenuLinks = document.querySelectorAll('.js-menu-link');

// toggle visibility of the menu backdrop
function toggleMenu() {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
  backdrop.classList.toggle('is-hidden');
}

// event listener to toggle menu backdrop when toggle btn clicked
openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
mobMenuLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});
backdrop.addEventListener('click', ({ target, currentTarget }) => {
  currentTarget === target && toggleMenu();
});
