document.addEventListener('DOMContentLoaded', () => {

    // 1. Script untuk Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    // Jika Anda ingin menu muncul, Anda perlu membuat CSS untuk .nav-links.nav-active
    // Untuk saat ini, kita akan non-aktifkan karena tidak ada di desain baru.
    // hamburger.addEventListener('click', () => {
    //     navLinks.classList.toggle('nav-active');
    // });

    // 2. Script untuk Animasi Fade-in saat Scroll
    const sections = document.querySelectorAll('.features, .impact');

    const options = {
        root: null, // viewport
        threshold: 0.15, // 15% dari elemen terlihat
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