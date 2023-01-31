import { evenOrOdd } from "./numbers.js";

const number = document.querySelector("#your-number");
const output = document.querySelector("#output");

number.addEventListener("keyup", () => {
  output.textContent = evenOrOdd(number.value);
});


