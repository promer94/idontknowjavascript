const thunkify = fn => (...args) => callback => {
  return fn(...args, callback)
}
function foo(x, y, cb) {
  setTimeout(() => cb(x + y), 1000)
}

const fooThunkory = thunkify(foo)

const fooThunk = fooThunkory(3, 4)
fooThunk(sum => {
  console.log(sum)
})
