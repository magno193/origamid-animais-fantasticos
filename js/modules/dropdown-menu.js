import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(item =>
      menu.addEventListener(item, handleClick)
    );
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.toggle('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
};
