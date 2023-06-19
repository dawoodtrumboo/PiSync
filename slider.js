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
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  }
  
});
}
{
  var swiper = new Swiper(".testo-js", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
   
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
      650: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      }
    }
    
  });
}
