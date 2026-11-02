document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const root = document.documentElement;

    const updateThemeIcon = () => {
        if (root.classList.contains('dark-theme')) {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    };

    updateThemeIcon();

    themeToggleBtn.addEventListener('click', () => {
        root.classList.toggle('dark-theme');

        if (root.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        updateThemeIcon();
    });

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    const detailToggles = document.querySelectorAll('.details-toggle');

    detailToggles.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const detailsWrapper = button.nextElementSibling;
            const labelSpan = button.querySelector('span');

            button.setAttribute('aria-expanded', !isExpanded);

            detailsWrapper.classList.toggle('open');

            if (!isExpanded) {
                labelSpan.textContent = 'Ukryj szczegóły techniczne';
            } else {
                labelSpan.textContent = 'Szczegóły techniczne projektu';
            }
        });
    });
});
