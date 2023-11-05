"use strict";
const textInput = document.querySelector("input#name-input");
const textOutput = document.querySelector("span#name-output");

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "" || event.currentTarget.value === " ") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = event.currentTarget.value;
  }
});
