let modalMenu = document.querySelector('.modal-menu');
let btnModalShowMenu = document.querySelector('.navigation__burger');
let btnClose = modalMenu.querySelector('.button__close');
let bodyMain = document.querySelector('.main-body');

function getModalMenu() {
    btnModalShowMenu.addEventListener('click', function(){
      modalMenu.classList.toggle('menu--show');
      bodyMain.classList.toggle('main-body--style');
    });
    btnClose.addEventListener('click', function(){
      modalMenu.classList.remove('menu--show');
      bodyMain.classList.remove('main-body--style');
    });
}
export default getModalMenu();
