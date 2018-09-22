function numbersCloseEnoughToEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}

const a = 0.1 + 0.2
const b = 0.3

console.log(numbersCloseEnoughToEqual(a, b))
