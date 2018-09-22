const a = 0
const b = 0 / -3

console.log(a == b) //eslint-disable-line
console.log(-0 == 0) //eslint-disable-line

console.log(a === b)
console.log(-0 === 0) //eslint-disable-line

console.log(0 > -0) //eslint-disable-line
console.log(a > b)

function isNegZero(n) {
  n = Number(n)
  return n === 0 && 1 / n === -Infinity
}

console.log(isNegZero(-0))
console.log(isNegZero(0 / -3))
console.log(isNegZero(0))
