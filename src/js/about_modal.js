(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-about-modal-window-open]'),
    closeModalBtn: document.querySelector('[data-about-modal-window-close]'),
    modal: document.querySelector('[data-about-modal-window]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
