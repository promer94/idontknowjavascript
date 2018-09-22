function foo(num) {
  console.log(`foo: ${num}`)

  // keep track of how many times `foo` is called
  data.count += 1
}

let data = {
  count: 0
}

for (let i = 0; i < 10; i += 1) {
  if (i > 5) {
    foo(i)
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log(data.count) // 4
