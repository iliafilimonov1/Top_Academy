import { wait } from "./helpers.js";

const waitPromise = wait(3000);
console.log(waitPromise); // pending 

waitPromise.then(() => {
  console.log("waited 3 second");
  console.log(waitPromise); // fulfilled 
});

console.log(waitPromise); // pending 


