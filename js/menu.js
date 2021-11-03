(() => {
  const refs = {
    openmenuBtn: document.querySelector('.menu-open-btn'),
    closemenuBtn: document.querySelector('.mob-menu__btn-close'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openmenuBtn.addEventListener('click', togglemenu);
  refs.closemenuBtn.addEventListener('click', togglemenu);

  function togglemenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();