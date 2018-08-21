const thunkify = fn => (...args) => cb => {
  args.push(cb)
  return fn(...args)
}
const b = [1, 2, 3, 4, 5]
thunkify((...args) => {
  setTimeout(() => {
    const cb = args.pop()
    cb(...args)
  })
})(...b)(
  (...args) => console.log(args.reduce((prev, current) => prev + current)),
  0
)
