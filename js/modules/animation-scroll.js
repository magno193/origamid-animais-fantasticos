export default function initAnimationScroll() {
  const sections = document.querySelectorAll('[data-animation="scroll"]');
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    function animateScroll() {
      sections.forEach(item => {
        const sectionTop = item.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - halfWindow) < 0;
        if (isSectionVisible) {
          item.classList.add('ativo');
        } else if (item.classList.contains('ativo')) {
          item.classList.remove('ativo');
        }
      })
    };
    animateScroll();

    window.addEventListener('scroll', animateScroll);
  }
}