// thanks to Benjamin Gruenbaum (@benjamingr on GitHub) for
// big improvements here!
function run(...args) {
  // initialize the generator in the current context
  const it = args[0].apply(args[0], args.slice[1])

  // return a promise for the generator completing
  return Promise.resolve().then(function handleNext(value) {
    // run to the next yielded value
    const next = it.next(value)
    return (function handleResult(next) {
      return next.done
        ? next.value
        : Promise.resolve(next.value).then(handleNext, err => {
            return Promise.resolve(it.throw(err)).then(handleResult)
          })
    })(next)
  })
}
function doLater(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}

function* main() {
  try {
    const a = doLater(1, 2)
    const b = doLater(2, 3)
    const result = yield a
    const num = yield b
    console.log(result + num)
  } catch (e) {
    console.log(e.message)
  }
}

run(main)
