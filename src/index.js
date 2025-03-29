import "../css/style.css";

const next = document.querySelector("#next");
const prev = document.querySelector("#previous");
const slides = document.querySelectorAll(".slide");
const circles = document.querySelectorAll(".circle");
let slideIndex = 1;
showSlide(slideIndex);
// window.addEventListener("load", () => {
//   showSlide(slideIndex);
// });
next.addEventListener("click", () => {
  slideIndex += 1;
  showSlide(slideIndex);
});
prev.addEventListener("click", () => {
  slideIndex -= 1;
  showSlide(slideIndex);
});

function showSlide(n) {
  let i;
  if (n === slides.length + 1) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  circles[slideIndex - 1].className += " active";
}
