const thunkify = fn => (...args) => callback => {
  return fn(...args)(callback)
}
const thunkifyFunc = (...args) => callback => {
  setTimeout(() => {
    callback(...args)
  })
}
const b = [1, 2, 3, 4, 5]
const logValues = (...args) => console.log(args)
thunkify(thunkifyFunc)(...b)(logValues)
