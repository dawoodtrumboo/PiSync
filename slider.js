{
  var swiper = new Swiper(".product-slider", {
  slidesPerView: 2  ,
  spaceBetween: 20,
  slidesPerGroup: 1,
 
  // loop: true,
  // loopFillGroupWithBlank: true,
  pagination: {
    el: ".product-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    1800:{
      slidesPerView: 5,
      slidesPerGroup: 1,    },
    1200:{
      slidesPerView: 4,
      slidesPerGroup: 1, 
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    }

  }
 
  
  
});
}
{
  var swiper = new Swiper(".team-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 1,
 
  // loop: true,
  // loopFillGroupWithBlank: true,  
  pagination: {
    el: ".team-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    1800:{
      slidesPerView: 5,
      slidesPerGroup: 1,    },
    1200:{
      slidesPerView: 4,
      slidesPerGroup: 1, 
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 1,
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
        1100:{
            slidesPerView:2
        }
    }
});
}

