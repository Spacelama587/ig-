const slides = document.querySelector('.slides'); 
const slideImg = document.querySelectorAll('.slides img'); 
let currentIdx = 0; 
const slideCount = slideImg.length; 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
const slidesWidth = 740; 
const slideMargin = 0; 


slides.style.width = (slidesWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
  slides.style.left = -num * 740 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function () {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});