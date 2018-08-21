let promiseCount = 0
const p1 = new Promise(resolve => {
  const thisPromiseCount = ++promiseCount //eslint-disable-line
  console.log(
    'beforeend',
    `${thisPromiseCount}) Promise started 😀 Async code started`
  )
  setTimeout(() => {
    resolve(thisPromiseCount)
  }, 1000)
})
const p2 = new Promise(resolve => {
  const thisPromiseCount = ++promiseCount //eslint-disable-line
  console.log(
    'beforeend',
    `${thisPromiseCount}) Promise started 😀 Async code started`
  )
  setTimeout(() => {
    resolve(thisPromiseCount)
  }, 500)
})
p1.then(res => {
  console.log(`p1${res}`)
  return p2
}).then(res => {
  console.log(`p2${res}`)
})
