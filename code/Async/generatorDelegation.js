function* foo() {
  console.log('`*foo()` starting')
  yield 3
  yield 4
  console.log('`*foo()` finished')
}

function* bar() {
  yield 1
  yield 2
  yield* foo() // `yield`-delegation!
  yield 5
}
const it = bar()
for (const i of it) {
  console.log(i)
}
