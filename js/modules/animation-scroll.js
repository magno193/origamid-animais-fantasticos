export default function initAnimationScroll() {
  const sections = document.querySelectorAll('[data-animation="scroll"]');

  let halfWindow;
  function animateScroll() {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - halfWindow) < 0;
      if (isSectionVisible) {
        item.classList.add('ativo');
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      }
    });
  }
  if (sections.length) {
    halfWindow = window.innerHeight * 0.6;
    animateScroll();

    window.addEventListener('scroll', animateScroll);
  }
}
