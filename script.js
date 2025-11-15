// Smooth scrolling and navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const profileImg = document.getElementById('profileImg');

    // Navigation functionality
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Switch pages
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            const targetPage = document.getElementById(targetId);
            if (targetPage) {
                targetPage.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // CTA button navigation
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector(`a[href="#${targetId}"]`).classList.add('active');
            
            // Switch pages
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            const targetPage = document.getElementById(targetId);
            if (targetPage) {
                targetPage.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Back to top button
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector(`a[href="#${targetId}"]`).classList.add('active');
            
            // Switch pages
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            const targetPage = document.getElementById(targetId);
            if (targetPage) {
                targetPage.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Handle profile image error (if image not found)
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            // Create a placeholder with initials
            this.style.display = 'none';
            const container = this.parentElement;
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 4rem;
                font-weight: 700;
                border-radius: 50%;
            `;
            placeholder.textContent = 'AJ';
            container.appendChild(placeholder);
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all info items and contact items
    const animatedElements = document.querySelectorAll('.info-item, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add parallax effect to background circles
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const circles = document.querySelectorAll('.bg-circle');
        
        circles.forEach((circle, index) => {
            const speed = 0.5 + (index * 0.1);
            circle.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add mouse move parallax effect to profile image
    const profileWrapper = document.querySelector('.profile-image-wrapper');
    if (profileWrapper) {
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const imageContainer = document.querySelector('.profile-image-container');
            if (imageContainer) {
                const moveX = (mouseX - 0.5) * 20;
                const moveY = (mouseY - 0.5) * 20;
                imageContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
    }

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.cta-button, .back-button, .icon-link');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

