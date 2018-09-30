export function request(url) {
  //eslint-disable-line
  const oReq = new XMLHttpRequest()

  return new Promise((resolve, reject) => {
    oReq.open('GET', url)
    oReq.addEventListener('load', ({ srcElement: { response, status } }) => {
      response = JSON.parse(response)
      resolve({ status, response })
    })
    oReq.addEventListener('error', error => reject(error))
    oReq.send()
  })
}
