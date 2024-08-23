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



    const spinner = document.createElement('div');

    spinner.style.border = '16px solid #f3f3f3';

    spinner.style.borderTop = '16px solid #3498db';

    spinner.style.borderRadius = '50%';

    spinner.style.width = '120px';

    spinner.style.height = '120px';

    spinner.style.animation = 'spin 2s linear infinite';



    loader.appendChild(spinner);

    document.body.appendChild(loader);



    window.addEventListener('load', function() {

        loader.style.transform = 'translateX(100%)';

        setTimeout(() => {

            loader.style.display = 'none';

        }, 1000); // Ensure the loader is removed after the transition completes

    });

});