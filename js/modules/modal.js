export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  if (btnOpen && btnClose && containerModal) {
    function toggleModal(e) {
      e.preventDefault();
      containerModal.classList.toggle('active');
    };

    function outOfModalClick(e) {
      if (e.target === this) toggleModal(e);
    };

    btnOpen.addEventListener('click', toggleModal);
    btnClose.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', outOfModalClick);
  }
};
