var innerTech = document.querySelector('.slider__techs');
var innerBrand = document.querySelector('.slider__brands')
var buttonShow = document.querySelectorAll('.button--hidden');

function hideShowCard() {
  buttonShow.forEach((item) => {
    item.addEventListener('click', function(event){
      if (event.target.id === 'brand' && event.target.id !== '') {
        event.target.classList.toggle('button--visible');
        innerBrand.classList.toggle('slider--show');
      }
      if (event.target.id === 'tech' && event.target.id !== '') {
        event.target.classList.toggle('button--visible');
        innerTech.classList.toggle('slider--show');
      }
      if (event.target.classList.contains('button--visible')){
        event.target.textContent= 'Скрыть всё';
            }
          else {
            event.target.textContent= 'Показать всё';
            }
  })
  });
}

export default hideShowCard();
