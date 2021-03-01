export default class TabNavigation {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  activeTab(index) {
    this.tabContent.forEach((item) => item.classList.remove(this.activeClass));
    // const direction = this.tabContent[index].dataset.animation;
    this.tabContent[index].classList.add(this.activeClass);
  }

  // Add the events in tabs
  addTabNavEvent() {
    this.tabMenu.forEach(
      (item, index) => item.addEventListener('click', () => this.activeTab(index)),
    );
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // activate the first item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
