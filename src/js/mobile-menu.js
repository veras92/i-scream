(() => {
  const refs = {
    openMenuBtn: document.querySelector('[mobile-header-menu-open]'),
    closeMenuBtn: document.querySelector('[mobile-header-menu-close]'),
    menu: document.querySelector('[mobile-header-menu]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.menu.classList.toggle('is-open-mobile');
  }
})();