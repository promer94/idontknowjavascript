/**
 * In Chrome 3 4 1 return undefined
 * In Firefox 3 return undefined 4 1
 */
new Promise(resolve => {
  resolve(1)
  Promise.resolve().then(() => {
    console.log(4)
  })
}).then(t => {
  console.log(t)
})
console.log(3)
