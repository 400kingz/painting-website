const burgerMenu = document.querySelector('#burger-menu');
const navbarRight = document.querySelector('#navbarRight');
const closeMenu = document.querySelector('#closeMenu');
const navbarLinks = document.querySelectorAll('.navbar__link');

burgerMenu.addEventListener('click', () => {
  navbarRight.classList.toggle('reveal');
  burgerMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('reveal');
})

closeMenu.addEventListener('click', () => {
  navbarRight.classList.toggle('reveal');
  burgerMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('reveal');
});

navbarLinks.forEach(element => {
  element.addEventListener('click', () => {
    navbarRight.classList.toggle('reveal');
    closeMenu.classList.toggle('reveal');
    burgerMenu.classList.toggle('hidden');
  });
});