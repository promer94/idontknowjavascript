function add(x, y) {
  return Promise.all([x, y]).then(
    values => {
      return values[0] + values[1]
    },
    error => {
      console.log(error.message)
    }
  )
}

const a = new Promise(resolve => {
  setTimeout(() => resolve(1), 1000)
})
const b = new Promise((resolve, reject) => {
  reject(new Error('error'))
})
add(a, b)
