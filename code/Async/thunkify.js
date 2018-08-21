const thunkify = fn => (...args) => callback => {
  return fn(...args)(callback)
}
const thunkifyFunc = (...args) => callback => {
  setTimeout(() => {
    callback(...args)
  })
}
const b = [1, 2, 3, 4, 5]
console.log(thunkify(thunkifyFunc)(...b))
