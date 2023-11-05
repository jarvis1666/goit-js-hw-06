const input = document.querySelector("input#validation-input");
const inputLength = document.querySelector('input[data-length="6"]');

const hendleInput = (even) => {
  if (
    even.currentTarget.value.length === parseInt(inputLength.dataset.length)
  ) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (even.currentTarget.value.length === 0) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};
input.addEventListener("blur", hendleInput);
