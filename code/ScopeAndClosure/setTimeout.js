/* eslint-disable */
for (let a = 0; a < 5; a += 1) {
  //eslint-disable-line
  console.log(`a = ${a}`) //eslint-disable-line
}

for (var b = 0; b < 5; b += 1) {
  //eslint-disable-line
  setTimeout(() => {
    //eslint-disable-line
    console.log(`b = ${b}`) //eslint-disable-line
  }, 1000 * b)
}

for (let c = 0; c < 5; c += 1) {
  //eslint-disable-line
  ;(function(c) {
    setTimeout(() => {
      console.log(`c = ${c}`) //eslint-disable-line
    }, c * 1000)
  })(c)
}

for (var d = 0; d < 5; d += 1) {
  //eslint-disable-line
  setTimeout(
    (function() {
      //eslint-disable-line
      console.log(`d = ${d}`) //eslint-disable-line
    })(),
    d * 1000
  )
}

for (let e = 0; e < 5; e += 1) {
  setTimeout(() => {
    console.log(`e = ${e}`) //eslint-disable-line
  }, 1000 * e)
}
