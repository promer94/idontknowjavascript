function foo(num) {
  console.log(`foo: ${num}`)

  // keep track of how many times `foo` is called
  foo.count += 1
}

foo.count = 0

let i

for (i = 0; i < 10; i += 1) {
  if (i > 5) {
    foo(i)
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log(foo.count) // 4
