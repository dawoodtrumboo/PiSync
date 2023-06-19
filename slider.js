{var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
 
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    1050: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
  
});
}
{
  const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor:true,
    spaceBetween:30,
    pagination:{
        el: '.js-testimonials-pagination',
        clicable:true
    },
    breakpoints:{
        767:{
            slidesPerView:2
        }
    }
});
}
