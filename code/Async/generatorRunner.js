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
      // generator has completed running?
      if (next.done) {
        return next.value
      }
      // otherwise keep going
      else {
        return Promise.resolve(next.value).then(
          // resume the async loop on
          // success, sending the resolved
          // value back into the generator
          handleNext,

          // if `value` is a rejected
          // promise, propagate error back
          // into the generator for its own
          // error handling
          err => {
            return Promise.resolve(it.throw(err)).then(handleResult)
          }
        )
      }
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
    const result = yield doLater(1, 2)
    const num = yield doLater(2, 3)
    console.log(result + num)
  } catch (e) {
    console.log(e.message)
  }
}

run(main)
