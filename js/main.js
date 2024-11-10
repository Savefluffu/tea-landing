const menu = document.querySelector(".menu");
const menuWrapper = document.querySelector(".menu__wrapper");
const menuBtn = document.querySelector(".menu__burger");
const menuClose = document.querySelector(".menu-close");
const body = document.body

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add("active")
  menu.classList.add("active");
  body.classList.add("lock");
});
menuClose.addEventListener('click', ()=>{
  menuBtn.classList.remove("active")
  menu.classList.remove("active");
  body.classList.remove("lock");
});


// Закрыть меню при нажатии на Ecsape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    menuBtn.classList.remove("active")
    menu.classList.remove("active");
    body.classList.remove("lock");
  }
})

// Закрыть меню при клике вне его
menuWrapper.addEventListener('click', event => {
  event._isClickWithInMenu = true;
});

menu.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  menuBtn.classList.remove("active")
  menu.classList.remove("active");
  body.classList.remove("lock");
});