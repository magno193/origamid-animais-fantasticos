export default class Modal {
  constructor(open, close, container) {
    this.btnOpen = document.querySelector(open);
    this.btnClose = document.querySelector(close);
    this.containerModal = document.querySelector(container);

    // binding to reference this Object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outOfModalClick = this.outOfModalClick.bind(this);
  }

  // open/close the active class
  toggleModal() {
    this.containerModal.classList.toggle('active');
  }

  // add the event tooglemodal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // close modal when clicked outside of it
  outOfModalClick(e) {
    if (e.target === this.containerModal) this.toggleModal();
  }

  addEvents() {
    this.btnOpen.addEventListener('click', this.eventToggleModal);
    this.btnClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.outOfModalClick);
  }

  init() {
    if (this.btnOpen && this.btnClose && this.containerModal) {
      this.addEvents();
    }
    return this;
  }
}
