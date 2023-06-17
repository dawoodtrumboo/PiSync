var swiper = new Swiper(".mySwiper", {
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

// function setMobileClass() {
//   var container = document.querySelector('.swiper-container');
//   if (window.innerWidth < 768) {
//     container.classList.add('mobile');
//   } else {
//     container.classList.remove('mobile');
//   }
// }

// // Call the function when the window is resized
// window.addEventListener('resize', setMobileClass);

// // Set the initial class on page load
// setMobileClass();
