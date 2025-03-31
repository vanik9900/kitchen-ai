// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Navigation
    nav.classList.toggle('active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animations for Cards
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

document.querySelectorAll('.feature-card, .analytics-card, .menu-card, .waste-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
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

// Demo Section Functionality
const demoButtons = document.querySelectorAll('.demo-button');

demoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const demoType = button.getAttribute('data-demo');
        const card = button.closest('.demo-card');
        const placeholder = card.querySelector('.camera-placeholder, .chart-placeholder');
        
        // Simulate loading state
        button.textContent = 'Loading...';
        button.disabled = true;

        // Simulate demo activation
        setTimeout(() => {
            if (demoType === 'camera') {
                placeholder.innerHTML = `
                    <div class="camera-feed-active">
                        <i class="fas fa-camera"></i>
                        <p>Camera Feed Active</p>
                    </div>
                `;
            } else {
                placeholder.innerHTML = `
                    <div class="dashboard-active">
                        <i class="fas fa-chart-line"></i>
                        <p>Dashboard Loading</p>
                    </div>
                `;
            }
            button.textContent = 'View Demo';
            button.disabled = false;
        }, 1500);
    });
});

// Hover Effects for Cards
document.querySelectorAll('.feature-card, .analytics-card, .menu-card, .waste-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// CTA Button Loading Animation
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        ctaButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            ctaButton.style.transform = 'scale(1)';
        }, 200);
    });
}

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
});

// Add CSS for scroll progress bar
const style = document.createElement('style');
style.textContent = `
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, var(--secondary-color), var(--primary-color));
        z-index: 1001;
        transition: width 0.1s ease;
    }
`;
document.head.appendChild(style); 