let a = 1
let b = 2

function* foo() {
  a += 1
  yield
  b *= a
  a = (yield b) + 3
}

function* bar() {
  b -= 1
  yield
  a = (yield 8) + b
  b = a * (yield 2)
}

function step(gen) {
  const it = gen()
  let last
  return function() {
    last = it.next(last).value
  }
}
const s1 = step(foo)
const s2 = step(bar)

s1() // a = 2
s1() // b = 4
s1() // a = 7

s2() // b = 3
s2()
s2() // a = 11
s2() // b = 22
