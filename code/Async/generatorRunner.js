function run(...args) {
  // initialize the generator in the current context
  const [fn, ...data] = args
  const it = fn.apply(fn, data)

  // return a promise for the generator completing
  return Promise.resolve().then(function handleNext(value) {
    // run to the next yielded value
    const next = it.next(value)
    return next.done
      ? next.value
      : Promise.resolve(next.value).then(handleNext, err => {
          return Promise.resolve(it.throw(err)).then(() => next.value)
        })
  })
}
function doLater(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}

function* main(c, d) {
  try {
    const a = doLater(1, c)
    const b = doLater(2, d)
    const result = yield a
    const num = yield b
    console.log(result + num)
    return result + num
  } catch (e) {
    console.log(e.message)
  }
}

run(main, 1, 2).then(v => console.log('v', v))
