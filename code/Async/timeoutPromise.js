function timeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Time Out'))
    }, delay)
  })
}
function foo(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, delay)
  })
}
Promise.race([foo(1000), timeoutPromise(5000)]).then(
  data => {
    console.log(data)
  },
  error => {
    console.log(error.message)
  }
)
