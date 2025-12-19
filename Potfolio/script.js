// ============================================
// Navigation Toggle
// ============================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ============================================
// Active Nav Link on Scroll
// ============================================
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// ============================================
// Navbar Background on Scroll
// ============================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// Rotating Title Animation
// ============================================
const titles = [
    'Full Stack Developer',
    'Java Developer',
    'React Developer',
    'Backend Engineer',
    'Problem Solver'
];

let titleIndex = 0;
const rotatingTitle = document.getElementById('rotating-title');

function rotateTitle() {
    rotatingTitle.style.opacity = '0';
    rotatingTitle.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        titleIndex = (titleIndex + 1) % titles.length;
        rotatingTitle.textContent = titles[titleIndex];
        rotatingTitle.style.opacity = '1';
        rotatingTitle.style.transform = 'translateY(0)';
    }, 300);
}

rotatingTitle.style.transition = 'all 0.3s ease';
setInterval(rotateTitle, 3000);

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation classes
document.querySelectorAll('.skill-category, .timeline-item, .cert-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Add staggered animation delays
document.querySelectorAll('.skill-category').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
});

document.querySelectorAll('.cert-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
});

// Animate on intersection
const animatedElements = document.querySelectorAll('.skill-category, .timeline-item, .cert-card, .project-card');
const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

animatedElements.forEach(el => animateObserver.observe(el));

// ============================================
// Contact Form Handler
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Create mailto link
    const mailtoLink = `mailto:hemadharshini.tech09@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
    
    window.location.href = mailtoLink;
    
    // Show success message
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>Message Sent!</span> <i class="fas fa-check"></i>';
    btn.style.background = 'linear-gradient(135deg, #27ca40 0%, #50fa7b 100%)';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        contactForm.reset();
    }, 3000);
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ============================================
// Typing Effect for Code Window
// ============================================
const codeContent = document.querySelector('.code-content code');
const originalCode = codeContent.innerHTML;

function typeCode() {
    codeContent.innerHTML = '';
    let i = 0;
    const speed = 10;
    
    function type() {
        if (i < originalCode.length) {
            codeContent.innerHTML = originalCode.substring(0, i + 1);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Run typing effect when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(typeCode, 500);
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

heroObserver.observe(document.querySelector('.hero'));

// ============================================
// Parallax Effect for Background Orbs
// ============================================
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// ============================================
// Console Easter Egg
// ============================================
console.log(`
%c👋 Hello there, curious developer!
%c
Looking at my code? Feel free to connect:
📧 hemadharshini.tech09@gmail.com
🔗 linkedin.com/in/hemadharshini-p-026512364
💻 github.com/hemadharshini2209
`, 
'font-size: 20px; font-weight: bold; color: #3b82f6;',
'font-size: 14px; color: #94a3b8;'
);

