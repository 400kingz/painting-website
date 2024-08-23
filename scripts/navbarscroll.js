document.addEventListener("DOMContentLoaded", function() {

    const navbar = document.querySelector('.navbar');

    // Add transition for smooth effect
    navbar.style.transition = 'background-color 300ms';

    window.addEventListener('scroll', function() {

        if (window.scrollY > 200) { // Change the background color after scrolling

            navbar.style.backgroundColor = '#565656';

        } else {

            navbar.style.backgroundColor = 'transparent'; // Reset to transparent
        }

    });

});
