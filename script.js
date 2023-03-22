var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var slides = document.querySelectorAll('.swiper');
var sliderSlides = document.querySelector('.slider')
var buttonShow = document.querySelector('.button--hidden');

buttonShow.addEventListener('click', function(event){
  buttonShow.classList.toggle('button--visible');
  sliderSlides.classList.toggle('slider--show');
  buttonShow.classList.toggle('button--hidden');
  if (event.target.classList.contains('button--visible')){
    buttonShow.textContent= 'Скрыть всё';
    }
  else {
    buttonShow.textContent= 'Показать всё';
    }
});
