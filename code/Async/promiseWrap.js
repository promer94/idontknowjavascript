if (!Promise.wrap) {
  Promise.wrap = fn => (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, (err, v) => {
        if (err) {
          reject(err)
        } else {
          resolve(v)
        }
      })
    })
}
function add(a, b, callback) {
  setTimeout(() => callback(null, a + b), 1000)
}
Promise.wrap(add)(1, 2).then(data => console.log(data))
