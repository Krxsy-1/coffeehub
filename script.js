const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // prevents re-trigger
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }