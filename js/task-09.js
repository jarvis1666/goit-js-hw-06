function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
let color = document.querySelector("span.color");

const hendeleClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = `${getRandomHexColor()}`;
};

btn.addEventListener("click", hendeleClick);
