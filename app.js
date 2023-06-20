{
var talkBtn = document.querySelector(".head-btn");

// console.log(targetPos);
talkBtn.addEventListener('click',function(){
    var targetSection = document.getElementById("contact");
    var targetPos = targetSection.getBoundingClientRect().top;
    
    window.scrollTo({
        top:targetSection.offsetTop,
        behavior:'smooth'
    });
    
    // var interval = setInterval(function(){
    //     if(targetPos<=0){
    //         clearInterval(interval);
    //         return;
    //     }
    //     window.scrollBy(0,20);
    //     targetPos-=20;
    // },0);


});


}
{
    var serviceBtn = document.querySelector(".service-btn");

// console.log(targetPos);
serviceBtn.addEventListener('click',function(){
    var targetSection = document.getElementById("services");
    var targetPos = targetSection.getBoundingClientRect().top;
    
    window.scrollTo({
        top:targetSection.offsetTop,
        behavior:'smooth'
    });
    
    // var interval = setInterval(function(){
    //     if(targetPos<=0){
    //         clearInterval(interval);
    //         return;
    //     }
    //     window.scrollBy(0,20);
    //     targetPos-=20;
    // },0);


});
}
{
    // Loader javascript code
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
      
        setTimeout(() => {
            loader.classList.add("loader--hidden");
        
            loader.addEventListener("transitionend", () => {
              document.body.removeChild(loader);
            });
          }, 200);
      });
      
}