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

// Login / signup modal
var modalOverlay = document.getElementById('auth-modal');
if (modalOverlay) {
  var openers = document.querySelectorAll('[data-open-modal]');
  var closeBtn = modalOverlay.querySelector('.modal-close');
  var tabs = modalOverlay.querySelectorAll('.modal-tab');
  var forms = modalOverlay.querySelectorAll('.modal-form');

  function openModal(e) {
    if (e) e.preventDefault();
    modalOverlay.classList.add('open');
    document.body.classList.add('modal-locked');
    var firstInput = modalOverlay.querySelector('.modal-form.active input');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.classList.remove('modal-locked');
  }

  openers.forEach(function (el) { el.addEventListener('click', openModal); });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
  });

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      forms.forEach(function (f) { f.classList.remove('active'); });
      tab.classList.add('active');
      var target = document.getElementById(tab.getAttribute('data-target'));
      if (target) target.classList.add('active');
    });
  });

  // Connexion côté client : on enregistre l'utilisateur dans le navigateur
  // puis on le redirige vers la page des outils (pas de serveur d'authentification).
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nameInput = form.querySelector('input[name="name"]');
      var emailInput = form.querySelector('input[name="email"]');
      try {
        localStorage.setItem('archiaid_user', JSON.stringify({
          nom: nameInput ? nameInput.value.trim() : '',
          courriel: emailInput ? emailInput.value.trim() : '',
          depuis: new Date().toISOString()
        }));
      } catch (err) {}
      var note = form.querySelector('.form-note');
      if (note) {
        note.textContent = note.getAttribute('data-success');
        note.classList.add('success');
      }
      var destination = modalOverlay.getAttribute('data-redirect');
      if (destination) {
        setTimeout(function () { window.location.href = destination; }, 600);
      }
    });
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
