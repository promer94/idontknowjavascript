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
