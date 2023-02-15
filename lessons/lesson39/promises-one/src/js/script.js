import { wait } from "./helpers.js";

console.log("A");

wait(3000)
  .then(() => {
    console.log("B");
  })
  .catch(() => {
    console.error('Something went wrong!')
  })

console.log("C");


