{
  var swiper = new Swiper(".product-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
 
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".product-pagination",
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
  var swiper = new Swiper(".team-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
 
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".team-pagination",
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
    spaceBetween:20,
    pagination:{
        el: '.js-testimonials-pagination',
        clicable:true
    },
    breakpoints:{
        992:{
            slidesPerView:2
        }
    }
});
}

