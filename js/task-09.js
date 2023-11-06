function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const colorSpan = document.querySelector("span.color");

let color = getRandomHexColor();

body.style.backgroundColor = color;
colorSpan.textContent = color;

const handleButtonClick = () => {
  color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
};
btn.addEventListener("click", handleButtonClick);
