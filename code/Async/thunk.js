const thunk = (a, b) => cb => {
  setTimeout(() => cb(a + 1, b + 1), 2000)
}
thunk(1, 2)((a, b) => console.log(a + b))
