// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// --- Mobile menu toggle ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
    });
});

// --- FAQ accordion ---
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

        // Open clicked (if it wasn't already open)
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// --- Contact form ---
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', () => {
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Se trimite...';
    btn.disabled = true;
});

// --- Scroll animations ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in to key sections
document.querySelectorAll('.service-card, .approach-card, .step, .faq-item, .about-text, .about-image, .contact-text, .contact-form-wrap').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
