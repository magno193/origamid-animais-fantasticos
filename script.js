function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');

    const activeTab = (index) => {
      tabContent.forEach(item => item.classList.remove('ativo'));
      tabContent[index].classList.add('ativo');
    };

    tabMenu.forEach(
      (item, index) => item.addEventListener('click', () => activeTab(index))
    );
  };
};
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('[data-animation="accordion"] dt');

  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');
    function activeAccordion() {
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach(item =>
      item.addEventListener('click', activeAccordion)
    );
  }
}
initAccordion();

function initScroll() {
  const internalLinks = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  internalLinks.forEach(item => {
    item.addEventListener('click', scrollToSection);
  });
}
initScroll();

function initAnimationScroll() {
  const sections = document.querySelectorAll('[data-animation="scroll"]');
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    function animateScroll() {
      sections.forEach(item => {
        const sectionTop = item.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - halfWindow) < 0;
        if (isSectionVisible) item.classList.add('ativo');
      })
    };
    animateScroll();

    window.addEventListener('scroll', animateScroll);
  }
}
initAnimationScroll();