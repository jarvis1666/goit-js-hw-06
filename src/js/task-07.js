const input = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

const hendleTextSize = (even) => {
  text.style.fontSize = `${even.currentTarget.value}px`;
};
input.addEventListener("input", hendleTextSize);
