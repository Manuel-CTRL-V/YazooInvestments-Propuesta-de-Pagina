// js/animations.js — Yazoo Premium Animations Engine
(function () {
  'use strict';

  // ── 1. SCROLL REVEAL via IntersectionObserver ──────────────────────────────
  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('y-visible');
          observer.unobserve(entry.target); // animate only once
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // Auto-tag eligible elements that don't already have a reveal class
    const selectors = [
      'section > div', 'section > h1', 'section > h2', 'section > p',
      'article', '.rounded-xl', '.rounded-2xl', '.grid > div', '.flex > div',
      'h1', 'h2', 'h3', 'p[class]', 'figure', 'blockquote'
    ];

    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        // Skip elements already processed or inside hero (immediate)
        if (el.closest('#age-gate-overlay')) return;
        if (el.classList.contains('y-reveal')) return;
        if (el.closest('header') || el.closest('nav') || el.closest('footer')) return;

        el.classList.add('y-reveal');

        // Stagger siblings inside grids
        const parent = el.parentElement;
        if (parent && (parent.classList.contains('grid') || parent.classList.contains('flex'))) {
          const siblings = Array.from(parent.children).filter(c => c.classList.contains('y-reveal'));
          const idx = siblings.indexOf(el);
          if (idx > 0 && idx <= 6) el.dataset.delay = idx;
        }

        observer.observe(el);
      });
    });
  }

  // ── 2. NAVBAR SHRINK ON SCROLL ────────────────────────────────────────────
  function initNavShrink() {
    const header = document.querySelector('header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.classList.add('y-scrolled');
      } else {
        header.classList.remove('y-scrolled');
      }
    }, { passive: true });
  }

  // ── 3. HERO PARALLAX ─────────────────────────────────────────────────────
  function initParallax() {
    const heroImgs = document.querySelectorAll('section:first-of-type img, section.relative img');
    if (!heroImgs.length) return;

    heroImgs.forEach(img => img.classList.add('y-parallax'));

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      heroImgs.forEach(img => {
        // Only parallax if in/near viewport
        const rect = img.closest('section')?.getBoundingClientRect();
        if (rect && rect.bottom > 0 && rect.top < window.innerHeight) {
          img.style.transform = `translateY(${scrollY * 0.18}px)`;
        }
      });
    }, { passive: true });
  }

  // ── 4. ANIMATED COUNTERS ─────────────────────────────────────────────────
  function animateCounter(el, target, suffix) {
    const duration = 1800;
    const start = performance.now();
    const startVal = 0;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(2, -10 * progress);
      const current = Math.round(startVal + (target - startVal) * eased);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function initCounters() {
    // Find big number elements (h2 with numeric content)
    document.querySelectorAll('h2, .text-6xl, .text-5xl').forEach(el => {
      const text = el.textContent.trim();
      const match = text.match(/^(\d[\d,.]*)([^\d]*)$/);
      if (!match) return;

      const raw = match[1].replace(/[,\.]/g, '');
      const num = parseInt(raw, 10);
      const suffix = match[2] || '';

      if (isNaN(num) || num < 2) return;

      el.dataset.counterTarget = num;
      el.dataset.counterSuffix = suffix;
      el.classList.add('y-counter');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(el, num, suffix);
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(el);
    });
  }

  // ── 5. CARD HOVER LIFT ───────────────────────────────────────────────────
  function initCardHovers() {
    const cardSelectors = [
      '.rounded-xl', '.rounded-2xl', '.bg-white.p-', '.bg-surface-container-low'
    ];
    cardSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (el.closest('header') || el.closest('nav') || el.closest('footer')) return;
        el.classList.add('y-card-hover');
      });
    });
  }

  // ── 6. IMAGE HOVER ZOOM ──────────────────────────────────────────────────
  function initImgZoom() {
    document.querySelectorAll('.overflow-hidden').forEach(el => {
      if (el.querySelector('img') && !el.closest('header')) {
        el.classList.add('y-img-zoom');
      }
    });
  }

  // ── 7. SHIMMER ON STAT SECTIONS (once) ──────────────────────────────────
  function initShimmer() {
    const statSections = document.querySelectorAll('section[class*="bg-primary"]');
    statSections.forEach(section => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('y-shimmer-once');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.3 });
      obs.observe(section);
    });
  }

  // ── INIT ALL ─────────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initNavShrink();
    initParallax();
    initCardHovers();
    initImgZoom();
    initShimmer();
    // Slight delay so Tailwind renders first
    setTimeout(() => {
      initReveal();
      initCounters();
    }, 80);
  }
})();
