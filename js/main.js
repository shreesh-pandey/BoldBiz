
document.addEventListener('DOMContentLoaded', function () {
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  });
  AOS.init();
});
// Show/hide back-to-top button on scroll
window.addEventListener("scroll", function () {
  const backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 100) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Optional: Scroll to top smoothly on click (redundant if HTML smooth scroll is working)
document.querySelector(".back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
