function request(url) {
  //eslint-disable-line
  const oReq = new XMLHttpRequest()

  return new Promise((resolve, reject) => {
    oReq.open('GET', url)
    oReq.addEventListener('load', data => resolve(data))
    oReq.addEventListener('error', error => reject(error))
    oReq.send()
  })
}

const wrap = fn => (
  ...args //eslint-disable-line
) =>
  new Promise((resolve, reject) => {
    fn(...args, (error, v) => {
      if (error) reject(error)
      else resolve(v)
    })
  })
