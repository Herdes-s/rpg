const slides = document.querySelectorAll(".slide");
const Image = document.querySelectorAll(".foto");
let index = 0;
let indexCont2 = 0;

function NextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function NextImage() {
  Image[indexCont2].classList.remove("active");
  indexCont2 = (indexCont2 + 1) % Image.length;
  Image[indexCont2].classList.add("active");
}

setInterval(NextSlide, 5000);
setInterval(NextImage, 5000);
