var talkBtn = document.querySelector(".head-btn");
console.log(talkBtn);

// console.log(targetPos);
talkBtn.addEventListener('click',function(){
    var targetSection = document.getElementById("contact");
    var targetPos = targetSection.getBoundingClientRect().top;
    
    var interval = setInterval(function(){
        if(targetPos<=0){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
        targetPos-=50;
    },25);


});


