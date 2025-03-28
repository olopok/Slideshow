import "../css/style.css";

const next = document.querySelector("#next");
const prev = document.querySelector("#previous");
const slides = document.querySelectorAll(".slide");
const circles = document.querySelectorAll(".circle");
let slideIndex = 1;
showSlide();
// window.addEventListener("load", () => {
//   showSlide(slideIndex);
// });
next.addEventListener("click", () => {
  slideIndex += 1;
  showSlide();
});

function showSlide() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
