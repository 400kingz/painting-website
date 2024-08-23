document.addEventListener("DOMContentLoaded", function() {

    const loader = document.createElement('div');

    loader.id = 'loader';

    loader.style.position = 'fixed';

    loader.style.top = '0';

    loader.style.left = '0';

    loader.style.width = '100%';

    loader.style.height = '100%';

    loader.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';

    loader.style.display = 'flex';

    loader.style.justifyContent = 'center';

    loader.style.alignItems = 'center';

    loader.style.zIndex = '1000';

    loader.style.transition = 'transform 1s ease-in-out';

    // Add a loading spinner or text if desired
    loader.innerHTML = '<div>Loading...</div>';

    document.body.appendChild(loader);

    // Simulate page load completion after 3 seconds
    setTimeout(() => {
        loader.style.transform = 'translateX(100%)';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000); // Wait for the transition to complete before hiding
    }, 3000);
});
