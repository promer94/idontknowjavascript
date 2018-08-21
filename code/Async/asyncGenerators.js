function doLater(a, b) {
  setTimeout(() => {
    it.next(a + b)
  }, 2000)
}
function* main() {
  const number = yield doLater(1, 1)
  console.log(number)
}

const it = main()
it.next()
