const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');
const mobileLinks = document.querySelectorAll('.nav-mobile-links a');

const navLogo = document.querySelector('.nav-logo');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-open');
  navMobile.classList.toggle('is-open');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    navMobile.classList.remove('is-open');
  });
});

navLogo.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  hamburger.classList.remove('is-open');
  navMobile.classList.remove('is-open');
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

