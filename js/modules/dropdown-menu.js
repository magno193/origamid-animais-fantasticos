import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    // define touchstart and click as default paramater for events
    // if undefined
    this.events = !events ? ['touchstart', 'click'] : events;
    this.activeClass = 'active';
    // binding
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // activate the dropdownmenu and add the function that
  // watches the click outside of it
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // add the events to the dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((item) => menu.addEventListener(item, this.activeDropdownMenu));
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
