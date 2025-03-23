import "../css/style.css";

function revealTheMenu(x) {
  x.classList.toggle("visible");
}

const element = document.querySelectorAll("button[type ='menu']");
for (let i = 0; i < element.length; i++) {
  element[i].addEventListener("click", (e) => {
    const firstSibling = e.target.nextElementSibling;
    revealTheMenu(firstSibling);
  });
}
