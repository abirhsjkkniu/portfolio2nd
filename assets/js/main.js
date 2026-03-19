/* ============================================================
   MAIN JS — Portfolio+ | Md. Abir Hossain Shihab
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── Page Loader ─── */
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      setTimeout(() => loader.remove(), 500);
    }, 1800);
  }

  /* ─── AOS Init ─── */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }

  /* ─── Active Nav Link ─── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ─── Progress Bar Animation ─── */
  const observeProgress = () => {
    const fills = document.querySelectorAll('.progress-fill');
    if (!fills.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const pct = fill.getAttribute('data-pct') || '0';
          fill.style.width = pct + '%';
          observer.unobserve(fill);
        }
      });
    }, { threshold: 0.3 });

    fills.forEach(f => observer.observe(f));
  };

  observeProgress();

  /* ─── Stat Counter Animation ─── */
  const animateCounters = () => {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-count'));
          const isDecimal = target % 1 !== 0;
          const duration = 1400;
          const start = performance.now();

          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            el.textContent = isDecimal ? current.toFixed(2) : Math.floor(current).toString();
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  };

  animateCounters();

  /* ─── Smooth scroll for anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ─── Cursor glow effect ─── */
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed; pointer-events: none; z-index: 9000;
    width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  /* ─── Contact form handler ─── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn-luxe');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> <span>Message Sent!</span>';
      btn.style.borderColor = '#4ade80';
      btn.style.color = '#4ade80';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.borderColor = '';
        btn.style.color = '';
        contactForm.reset();
      }, 3000);
    });
  }

  /* ─── Typing effect for hero subtitle ─── */
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const phrases = [
      'Legal Scholar',
      'Researcher',
      'Moot Court Advocate',
      'Academic Writer',
    ];
    let pi = 0, ci = 0, deleting = false;

    const type = () => {
      const phrase = phrases[pi];
      if (!deleting) {
        typingEl.textContent = phrase.substring(0, ci + 1);
        ci++;
        if (ci === phrase.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        typingEl.textContent = phrase.substring(0, ci - 1);
        ci--;
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      setTimeout(type, deleting ? 55 : 90);
    };
    type();
  }

});
