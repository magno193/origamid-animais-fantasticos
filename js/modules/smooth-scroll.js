export default function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  internalLinks.forEach((item) => {
    item.addEventListener('click', scrollToSection);
  });
}
