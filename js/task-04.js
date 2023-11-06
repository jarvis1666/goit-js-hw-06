let value = document.querySelector("#value");
let counterValue = 0;

const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

function counterValueIncreases() {
  counterValue += 1;
  value.textContent = counterValue;
}

function counterValueDecreases() {
  counterValue -= 1;
  value.textContent = counterValue;
}

// слухачі кліків до кнопок
increment.addEventListener("click", counterValueIncreases);
decrement.addEventListener("click", counterValueDecreases);
