document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');

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

  // Initialize AOS animations
  AOS.init();

  // Initial toggle check in case page loads scrolled
  toggleBackToTop();
});
