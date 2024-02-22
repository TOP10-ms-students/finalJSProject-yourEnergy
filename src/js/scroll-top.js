const scrollBtn = document.getElementById('scroll-top');

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const scrollBtnDisplay = () => {
  window.scrollY > window.innerHeight
    ? scrollBtn.classList.add('scroll-show')
    : scrollBtn.classList.remove('scroll-show');
};

window.addEventListener('scroll', scrollBtnDisplay);
scrollBtn.addEventListener('click', topFunction);
