/**
 * In Chrome 2 3 1 return undefined
 * In Firefox 2 return undefined 3 1
 */
new Promise(resolve => {
  resolve(1)
  Promise.resolve().then(() => {
    console.log(3)
  })
}).then(data => {
  console.log(data)
})
console.log(2)
