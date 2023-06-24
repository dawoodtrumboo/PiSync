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
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    }

  }
 
  
  
});
}
// {
//   var swiper = new Swiper(".team-slider", {
//   slidesPerView: 2,
//   spaceBetween: 20,
//   slidesPerGroup: 1,
 
//   // loop: true,
//   // loopFillGroupWithBlank: true,  
//   pagination: {
//     el: ".team-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints:{
//     768: {
//       slidesPerView: 3,
//       slidesPerGroup: 1,
//     }

//   }
  
// });
//   }
{
  if(window.innerWidth<728){
  const swiper = new Swiper('.teamSwiper', {
    grabCursor:true,
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
   
    pagination:{
        el: '.team-pagination',
        clicable:true
    },
    breakpoints:{
        370:{
          slidesPerView:2,
          slidesPerGroup:1,
        },
        600:{
            slidesPerView:3,
            slidesPerGroup:1,
        }
    }
});
}
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

