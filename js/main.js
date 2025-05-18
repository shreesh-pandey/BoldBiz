document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');
  const navbar = document.querySelector('#navbar');
  const navbarHeight = navbar ? navbar.offsetHeight : 0;
  let firstClickDone = false;

  const toggleBackToTop = () => {
    if (window.scrollY > 100) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  };

  window.addEventListener('scroll', toggleBackToTop);

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // AOS initialization
  AOS.init({
    once: true,
    duration: 600,
  });

  // Smooth scroll with navbar offset
  function scrollToSectionWithOffset(targetId, isFirstClick = false) {
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    const delay = isFirstClick ? 700 : 100;

    setTimeout(() => {
      requestAnimationFrame(() => {
        const y = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    }, delay);
  }

  document.querySelectorAll('.navbar-nav .nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    targetEl.scrollIntoView({ behavior: 'smooth' });
  });
});

  toggleBackToTop();
});
