const burgerMenu = document.querySelector('#burger-menu');
const navbarRight = document.querySelector('#navbarRight');
const closeMenu = document.querySelector('#closeMenu');

burgerMenu.addEventListener('click', () => {
  if (navbarRight.classList.contains('hidden')) {
    navbarRight.classList.remove('hidden');
    burgerMenu.classList.add('hidden');
    closeMenu.classList.remove('hidden');
    closeMenu.classList.add('reveal');
    navbarRight.classList.add('reveal');
  } else {
    navbarRight.classList.add('hidden');
  }
});

closeMenu.addEventListener('click', () => {
  if (navbarRight.classList.contains('reveal')) {
    navbarRight.classList.remove('reveal');
    navbarRight.classList.add('hidden');
    burgerMenu.classList.remove('hidden');
    burgerMenu.classList.add('reveal');
    closeMenu.classList.remove('reveal');
    closeMenu.classList.add('hidden');
  }
});