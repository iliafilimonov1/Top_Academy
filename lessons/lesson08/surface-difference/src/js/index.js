import { calculateDifference } from "./surface-difference.js"

const width1 = document.querySelector("#width1")
const length1 = document.querySelector("#length1")
const surface1 = document.querySelector("#surface1")

const width2 = document.querySelector("#width2")
const length2 = document.querySelector("#length2")
const surface2 = document.querySelector("#surface2")

const output = document.querySelector("#output")
const calculate = document.querySelector("#calculate")

calculate.addEventListener("click", () => {
  const firstRectangle = [
    parseInt(width1.value, 10) || 0,
    parseInt(length1.value, 10) || 0,
  ]
  const secondRectangle = [
    parseInt(width2.value, 10) || 0,
    parseInt(length2.value, 10) || 0,
  ]
  output.value = calculateDifference(firstRectangle, secondRectangle)
})

function calculateSurface1() {
  surface1.value = (parseInt(width1.value, 10) || 0) * (parseInt(length1.value, 10) || 0)
}

width1.addEventListener("keyup", calculateSurface1)
length1.addEventListener("keyup", calculateSurface1)

function calculateSurface2() {
  surface2.value = (parseInt(width2.value, 10) || 0) * (parseInt(length2.value, 10) || 0)
}

width2.addEventListener("keyup", calculateSurface2)
length2.addEventListener("keyup", calculateSurface2)
