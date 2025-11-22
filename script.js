// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Validation and Submission
const cashoutForm = document.getElementById('cashoutForm');
if (cashoutForm) {
    cashoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            wallet: document.getElementById('wallet').value,
            paymentMethod: document.getElementById('payment-method').value,
            payoutHandle: document.getElementById('payout-handle').value,
            confirmation: document.getElementById('confirmation').checked
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.wallet || !formData.paymentMethod || !formData.payoutHandle) {
            alert('Please fill in all required fields.');
            return;
        }

        if (!formData.confirmation) {
            alert('Please confirm that you have read and accept the terms and conditions.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Wallet address validation (basic)
        if (!formData.wallet.startsWith('0x') || formData.wallet.length < 10) {
            alert('Please enter a valid wallet address.');
            return;
        }

        // Simulate form submission
        alert('Thank you for your submission! We will review your request and contact you via email.');
        cashoutForm.reset();
    });
}

// Newsletter Form
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            form.reset();
        }
    });
});

// Reveal Details Button (Tutorial Page)
const revealBtn = document.getElementById('revealBtn');
if (revealBtn) {
    revealBtn.addEventListener('click', () => {
        const networkDetails = document.querySelector('.network-details');
        if (networkDetails) {
            networkDetails.style.display = networkDetails.style.display === 'none' ? 'block' : 'none';
        }
    });
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .step-card, .asset-card, .step-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    navbar.style.boxShadow = currentScroll > 50 ? '0 2px 20px rgba(0, 0, 0, 0.5)' : '0 2px 10px rgba(0, 0, 0, 0.3)';
    lastScroll = currentScroll;
});

// Add transition to navbar
if (navbar) {
    navbar.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
}

