for (let i = 0; i < 2; i += 1) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
  i += 1
}

for (let i = 0; i < 2; i += 1) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}

for (let i = (setTimeout(() => console.log(i)), 0); i < 2; i += 1) {
  i += 1
}
