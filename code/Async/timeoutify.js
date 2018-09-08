function timeoutify(fn, delay) {
  let intv = setTimeout(() => {
    intv = null
    fn(new Error('Timeout'))
  }, delay)
  return function(...args) {
    if (intv) {
      clearTimeout(intv)
      fn(null, ...args)
    }
  }
}

function foo(err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
}

const fn = timeoutify(foo, 1000)
setTimeout(() => fn(1), 500)
//setTimeout(()=>fn(1),2000) error !
