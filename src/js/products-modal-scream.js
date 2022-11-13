(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-about-scream-modal-open]'),
      closeModalBtn: document.querySelector('[data-about-scream-modal-close]'),
      modal: document.querySelector('[data-about-scream-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle('modal-open');
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  