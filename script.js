document.addEventListener('DOMContentLoaded', () => {

    // Fungsionalitas untuk menu mobile (hamburger) bisa ditambahkan di sini jika diperlukan.
    // const hamburger = document.querySelector('.hamburger');
    // const navLinks = document.querySelector('.nav-links');
    // hamburger.addEventListener('click', () => {
    //     navLinks.classList.toggle('nav-active');
    // });

    // Script untuk Animasi Fade-in saat Scroll
    const sections = document.querySelectorAll('.features, .impact, .news');

    const options = {
        root: null, 
        threshold: 0.15,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

});

