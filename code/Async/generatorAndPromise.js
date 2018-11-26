function doLater(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  }).then(result => {
    console.log(it.next(result).value)
  })
}

function* main() {
  const result = yield doLater(1, 2)
  return result + 10
}
const it = main()
it.next()
