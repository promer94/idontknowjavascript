function asyncify(fn) {
  const origFn = fn //store original function
  let intv = setTimeout(() => {
    intv = null
    if (fn) fn()
  }, 0) //set up a timer, it will queue the task in to event loop. It would not be executed until the current stack empty
  fn = null
  return function(...args) {
    /**
     * Firing too quickly, before `intv` timer has fired to indicate async turn has passed
     */
    if (intv) {
      /**
       * Add the wrapper's `this` to the `bind()` call parameters, as well as currying any passed in parameters
       */
      fn = origFn.bind(this, ...args) //change the fn reference which is waiting in the event loop
    } else {
      /**
       * Already async
       * Invoke original function
       */
      origFn(...args)
    }
  }
}
let a = 0

function result(val) {
  console.log(val + a)
}
function doSync(cb) {
  cb(1)
}
doSync(asyncify(result))
a += 2
