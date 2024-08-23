document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Change the background color after scrolling 50px
            navbar.style.backgroundColor = '#565656';
        } else {
            navbar.style.backgroundColor = 'transparent'; // Reset to transparent if less than 50px scrolled
        }
    });
});
