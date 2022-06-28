const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const num = document.getElementById("number")
const name = document.getElementById("text")

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
        name.textContent = "Joker"
    } else {
        slidePosition++;
        if (slidePosition === 1){
            name.textContent = "Baby Driver"
        }
        else if (slidePosition === 2)
        name.textContent = "Parasite"
    }
    num.textContent = slidePosition + 1;

    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
        name.textContent = "Parasite"
    } else {
        slidePosition--;
        if(slidePosition === 1){
             name.textContent = "Baby Driver"
        }
        else if (slidePosition === 0){
            name.textContent = "Joker"
        }
    }
    num.textContent = slidePosition + 1;
    
    slides[slidePosition].classList.add("carousel-item-visible");
}