const button = document.querySelector(".button");
const message = document.querySelector(".message");

let CLICKED_COUNT = 0;

button.addEventListener("click", function handleClick() {
  CLICKED_COUNT++;
  message.innerText = `You clicked ${CLICKED_COUNT} times`;
});


