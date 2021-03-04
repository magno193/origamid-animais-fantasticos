import debounce from './debounce.js';

export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    // binding
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // get the distance of eacth item in relation of the t site's top
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow),
      };
    });
  }

  // verify the distance in each object in relation of the site's scroll
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  // Remove scroll event
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }

    return this;
  }
}
