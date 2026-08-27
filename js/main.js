// Archi Aid — interactions

// Current year in the footer
var yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile navigation toggle
var toggle = document.getElementById('nav-toggle');
var nav = document.getElementById('main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Scroll-reveal for sections and cards
var revealTargets = document.querySelectorAll(
  '.section h2, .card, .pillar, .testimonial, .roadmap-step, .stat-card'
);
revealTargets.forEach(function (el) { el.classList.add('reveal'); });

if ('IntersectionObserver' in window) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach(function (el) { observer.observe(el); });
} else {
  revealTargets.forEach(function (el) { el.classList.add('visible'); });
}
