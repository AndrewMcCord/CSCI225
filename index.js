/* var i = 0;
var images = [];
var time = 3000;

images[0] = 'img/OIP (1).jpg';
images[1] = 'img/sqpurple.jpg';
images[2] = 'img/subscribe.jpg'; 
images[3] = 'img/water.webp';
images[4] = 'img/youtube-subscribe.webp';
images[5] = 'img/gradient.webp'; */
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
}
}
function showSlide(index){

if(index >= slides.length){
    slideIndex = 0;
}
else if(index < 0){
    slideIndex = slides.length - 1;
}

slides.forEach(slide => {
    slide.classList.remove("displaySlide");
});
slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(index){
clearInterval(intervalId);
    slideIndex--;
showSlide(slideIndex);
}
function nextSlide(index){
    slideIndex++;
    showSlide(slideIndex);
}
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
    }

window.onload = changeImg;
