// ========== NAVBAR SCROLL ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ========== MOBILE MENU ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========== ACTIVE NAV LINK ==========
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-link:not(.nav-link--cta)');

function updateActiveNav() {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);

        if (link && scrollY >= top && scrollY < top + height) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ========== SCROLL REVEAL ==========
function initReveal() {
    // Add reveal class to elements
    const revealTargets = document.querySelectorAll(
        '.about, .process-step, .timeline__item, .case-study, .skill-group, ' +
        '.deliverable, .education-card, .contact__info, .contact__form, ' +
        '.section-header, .hero__content, .hero__metrics, .metric-card'
    );

    revealTargets.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initReveal);

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const mailto = `mailto:singhnagraj1607@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        window.location.href = mailto;

        const btn = contactForm.querySelector('button');
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Opening Email Client...';
        btn.style.background = '#059669';

        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}

// ========== STAGGER ANIMATION ==========
document.addEventListener('DOMContentLoaded', () => {
    // Stagger metric cards
    document.querySelectorAll('.metric-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.1}s`;
    });

    // Stagger process steps
    document.querySelectorAll('.process-step').forEach((step, i) => {
        step.style.transitionDelay = `${i * 0.1}s`;
    });

    // Stagger skill groups
    document.querySelectorAll('.skill-group').forEach((group, i) => {
        group.style.transitionDelay = `${i * 0.08}s`;
    });

    // Stagger deliverables
    document.querySelectorAll('.deliverable').forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.08}s`;
    });
});
