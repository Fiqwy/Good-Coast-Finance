// ===== LEAD CAPTURE CONFIG =====
// Change this to your production URL once deployed
const AI_API_URL = 'http://localhost:8001';
const AI_WEBHOOK_KEY = 'REPLACE_WITH_WEBHOOK_KEY';

function captureLeadToAPI(leadData) {
    fetch(`${AI_API_URL}/api/webhook/lead`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': AI_WEBHOOK_KEY
        },
        body: JSON.stringify(leadData)
    }).catch(() => {}); // Fire-and-forget, never block the user
}

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===== ACTIVE NAV SCROLL-SPY =====
const navLinks = document.querySelectorAll('.nav-link:not(.nav-cta)');
const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

sections.forEach(section => navObserver.observe(section));

// ===== SCROLL ANIMATIONS =====
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            scrollObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => scrollObserver.observe(el));

// ===== ANIMATED COUNTERS =====
function easeOutQuad(t) { return t * (2 - t); }

function animateCounter(el, target, duration) {
    const start = performance.now();
    const update = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(target * easeOutQuad(progress));
        if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const target = parseInt(entry.target.getAttribute('data-count'));
            animateCounter(entry.target, target, 2000);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ===== TIMELINE ANIMATION =====
const timeline = document.querySelector('.timeline');
if (timeline) {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    timelineObserver.observe(timeline);
}

// ===== LOAN CALCULATOR =====
const calcAmount = document.getElementById('calcAmount');
const calcTerm = document.getElementById('calcTerm');
const calcRate = document.getElementById('calcRate');
const calcAmountVal = document.getElementById('calcAmountVal');
const calcTermVal = document.getElementById('calcTermVal');
const calcRateVal = document.getElementById('calcRateVal');
const calcWeekly = document.getElementById('calcWeekly');
const calcFortnightly = document.getElementById('calcFortnightly');
const calcMonthly = document.getElementById('calcMonthly');
const calcQuoteBtn = document.getElementById('calcQuoteBtn');

function formatCurrency(amount) {
    return '$' + Math.round(amount).toLocaleString();
}

function calculateRepayments() {
    const principal = parseFloat(calcAmount.value);
    const months = parseInt(calcTerm.value);
    const annualRate = parseFloat(calcRate.value) / 100;
    const monthlyRate = annualRate / 12;

    let monthly;
    if (monthlyRate === 0) {
        monthly = principal / months;
    } else {
        monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    }

    const fortnightly = (monthly * 12) / 26;
    const weekly = (monthly * 12) / 52;

    calcAmountVal.textContent = formatCurrency(principal);
    calcTermVal.textContent = months + ' months';
    calcRateVal.textContent = parseFloat(calcRate.value).toFixed(1) + '%';

    calcWeekly.textContent = formatCurrency(weekly);
    calcFortnightly.textContent = formatCurrency(fortnightly);
    calcMonthly.textContent = formatCurrency(monthly);

    // Update WhatsApp quote link
    const message = `Hey Chris! I just used your repayment calculator. I'm looking at $${principal.toLocaleString()} over ${months} months at around ${parseFloat(calcRate.value).toFixed(1)}%. That's roughly ${formatCurrency(monthly)}/month. Can you find me a better rate?`;
    calcQuoteBtn.href = `https://wa.me/61498973117?text=${encodeURIComponent(message)}`;
}

calcAmount.addEventListener('input', calculateRepayments);
calcTerm.addEventListener('input', calculateRepayments);
calcRate.addEventListener('input', calculateRepayments);
calculateRepayments();

// Capture calculator-driven leads when they click the quote button
calcQuoteBtn.addEventListener('click', () => {
    const principal = parseInt(calcAmount.value);
    const months = parseInt(calcTerm.value);
    const rate = parseFloat(calcRate.value).toFixed(1);
    captureLeadToAPI({
        name: 'Calculator Lead',
        asset_type: 'other',
        message: `Calculator quote: $${principal.toLocaleString()} over ${months} months at ${rate}%`,
        source: 'calculator'
    });
});

// ===== TESTIMONIAL CAROUSEL =====
const slides = document.querySelectorAll('.testimonial-slide');
const dotsContainer = document.getElementById('testimonialDots');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
let currentSlide = 0;
let autoplayInterval;

// Create dots
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('testimonial-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dotsContainer.children[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    dotsContainer.children[currentSlide].classList.add('active');
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });
nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });

function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 5000);
}

autoplayInterval = setInterval(nextSlide, 5000);

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    const carousel = document.querySelector('.testimonial-carousel');
    if (!carousel) return;
    const rect = carousel.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isVisible) return;

    if (e.key === 'ArrowLeft') { prevSlide(); resetAutoplay(); }
    if (e.key === 'ArrowRight') { nextSlide(); resetAutoplay(); }
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

function validateField(input) {
    const errorEl = document.getElementById(input.id + '-error');
    if (!errorEl) return true;

    let message = '';
    if (input.required && !input.value.trim()) {
        message = 'This field is required';
    } else if (input.id === 'phone' && input.value.trim()) {
        const cleaned = input.value.replace(/\s/g, '');
        if (!/^0[0-9]{9}$/.test(cleaned)) {
            message = 'Enter a valid Australian phone number (e.g. 0498 973 117)';
        }
    }

    if (message) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
        input.classList.add('invalid');
        return false;
    } else {
        errorEl.textContent = '';
        errorEl.classList.remove('visible');
        input.classList.remove('invalid');
        return true;
    }
}

// Real-time validation on blur
document.querySelectorAll('#contactForm input[required], #contactForm textarea[required]').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) validateField(input);
    });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all required fields
    const requiredFields = contactForm.querySelectorAll('input[required]');
    let isValid = true;
    requiredFields.forEach(field => {
        if (!validateField(field)) isValid = false;
    });
    if (!isValid) return;

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const asset = formData.get('asset');
    const message = formData.get('message');

    const assetLabels = {
        'car': 'a Car/Ute/Truck',
        'machinery': 'Heavy Machinery/Equipment',
        'marine': 'a Boat/Jet Ski',
        'motorcycle': 'a Motorcycle/ATV',
        'caravan': 'a Caravan/Camper/RV',
        'commercial': 'a Commercial/Specialist Asset',
        'other': 'an asset'
    };

    // Capture lead in Applied Intelligence dashboard
    captureLeadToAPI({
        name: name,
        phone: phone,
        email: email,
        asset_type: asset,
        message: message,
        source: 'website'
    });

    // Send to Formspree as backup (captures lead even if WhatsApp fails)
    const formspreeUrl = contactForm.getAttribute('action');
    if (formspreeUrl && !formspreeUrl.includes('YOUR_FORM_ID')) {
        fetch(formspreeUrl, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).catch(() => {});
    }

    // Open WhatsApp
    let waMessage = `Hey Chris! I'm ${name}.`;
    if (asset) waMessage += ` I'm interested in financing ${assetLabels[asset] || 'an asset'}.`;
    if (message) waMessage += ` ${message}`;
    if (phone) waMessage += ` My number is ${phone}.`;
    if (email) waMessage += ` Email: ${email}.`;

    window.open(`https://wa.me/61498973117?text=${encodeURIComponent(waMessage)}`, '_blank');

    contactForm.innerHTML = `
        <div class="form-success">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <path d="M22 4L12 14.01l-3-3"/>
            </svg>
            <h3>You're One Step Closer!</h3>
            <p>WhatsApp should be opening now. Chris will get back to you within the hour. If it didn't open, call him directly on <a href="tel:0498973117" style="color: var(--primary-600); font-weight: 700;">0498 973 117</a>.</p>
        </div>
    `;
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const navHeight = navbar.offsetHeight;
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.pageYOffset - navHeight,
                behavior: 'smooth'
            });
        }
    });
});

// ===== WHATSAPP FLOAT SHOW/HIDE =====
const whatsappFloat = document.getElementById('whatsappFloat');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        whatsappFloat.classList.add('visible');
    } else {
        whatsappFloat.classList.remove('visible');
    }
});
