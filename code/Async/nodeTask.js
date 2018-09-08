console.log(1)

setTimeout(() => {
  console.log(4)
  new Promise(resolve => {
    console.log(5)
    resolve()
  }).then(() => {
    console.log(6)
  })
}, 1000)

new Promise(resolve => {
  console.log(2)
  resolve()
}).then(() => {
  console.log(3)
})

setTimeout(() => {
  console.log(7)
  new Promise(resolve => {
    console.log(8)
    resolve()
    Promise.resolve().then(() => {
      console.log(9)
    })
  }).then(() => {
    console.log(10)
  })
}, 2000)
