document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
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

});