export default class SmoothScroll {
  constructor(links, options) {
    this.internalLinks = document.querySelectorAll(links);
    if (options === 'undefined') {
      this.options = {
        behavior: 'smooth',
        block: 'start',
      };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.internalLinks.forEach((item) => {
      item.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.internalLinks.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
