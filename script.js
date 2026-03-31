document.addEventListener('DOMContentLoaded', () => {

    /* ======================================================================
       Mobile Navigation
       ====================================================================== */

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('open') &&
            !navLinks.contains(e.target) &&
            !navToggle.contains(e.target)) {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    /* ======================================================================
       Scroll Animations (Intersection Observer)
       ====================================================================== */

    const animatedElements = document.querySelectorAll('.animate');

    if (animatedElements.length > 0) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        animatedElements.forEach(el => revealObserver.observe(el));
    }

    /* ======================================================================
       Active Nav Link Highlighting
       ====================================================================== */

    const sections = document.querySelectorAll('main section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    if (sections.length > 0 && navItems.length > 0) {
        const navObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const targetHref = `#${entry.target.id}`;
                        navItems.forEach(item => {
                            item.classList.toggle('active', item.getAttribute('href') === targetHref);
                        });
                    }
                });
            },
            { threshold: 0.2, rootMargin: '-80px 0px -60% 0px' }
        );

        sections.forEach(section => navObserver.observe(section));
    }

});
