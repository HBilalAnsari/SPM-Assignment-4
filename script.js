/* ========================================
   QuickPOS — Interactive Scripts
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile hamburger menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* ---------- Scroll-reveal animation ---------- */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- Contact form validation ---------- */
  const form      = document.getElementById('contactForm');
  const nameGroup = document.getElementById('nameGroup');
  const emailGroup = document.getElementById('emailGroup');
  const msgGroup  = document.getElementById('messageGroup');

  const nameInput  = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const msgInput   = document.getElementById('contactMessage');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear errors on input
  [nameInput, emailInput, msgInput].forEach(input => {
    input.addEventListener('input', () => {
      input.closest('.form-group').classList.remove('error');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (!nameInput.value.trim()) {
      nameGroup.classList.add('error');
      valid = false;
    }
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      emailGroup.classList.add('error');
      valid = false;
    }
    if (!msgInput.value.trim()) {
      msgGroup.classList.add('error');
      valid = false;
    }

    if (valid) {
      // Simulate success and redirect to thank-you page
      window.location.href = 'thank-you.html';
    }
  });

  /* ---------- Active nav highlight on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const highlightNav = () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) {
        a.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ---------- Counter animation for hero stats ---------- */
  const statValues = document.querySelectorAll('.stat-value');
  let statAnimated = false;

  const animateCounters = () => {
    if (statAnimated) return;
    const heroSection = document.getElementById('hero');
    const rect = heroSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      statAnimated = true;
      statValues.forEach(el => {
        const text = el.textContent;
        // Only animate purely numeric parts
        const numMatch = text.match(/[\d.]+/);
        if (numMatch) {
          const target = parseFloat(numMatch[0]);
          const suffix = text.replace(numMatch[0], '');
          const isFloat = text.includes('.');
          let start = 0;
          const duration = 1800;
          const startTime = performance.now();

          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const ease = 1 - Math.pow(2, -10 * progress);
            const current = start + (target - start) * ease;
            el.textContent = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }
  };
  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters(); // Run once on load

  /* ---------- Tilt effect on feature cards ---------- */
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = `translateY(-6px) perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

});
