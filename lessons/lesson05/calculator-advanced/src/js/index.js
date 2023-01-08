import { run } from "./run.js"

let output = document.querySelector("#output")

let firstNumber = 0
let operation = null
let resetAfterOperation = false

document.querySelectorAll("#calculator .number").forEach(button => {
  button.addEventListener("click", event => {
    let value = event.currentTarget.textContent;
    if (resetAfterOperation) {
      output.value = value
      resetAfterOperation = false
    } else {
      output.value += value
    }
  })
})

document.querySelectorAll("#calculator .operation").forEach(button => {
  button.addEventListener("click", event => {
    firstNumber = Number.parseInt(output.value)
    operation = event.currentTarget.dataset.action
    resetAfterOperation = true
  })
})

const equal = document.querySelector("#calculator .equal")
equal.addEventListener("click", () => {
  if (!operation) {
    return;
  }

  resetAfterOperation = true;
  let secondNumber = Number.parseInt(output.value, 10)

  output.value = run(operation, firstNumber, secondNumber)

  if (operation === 'divide' && secondNumber === 0) {
    alert("Cannot divide by zero")
    output.value = ""
  }

  //reset operation
  operation = null
})
