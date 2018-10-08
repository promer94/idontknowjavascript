const throttle = (fn, threshold = 160) => {
  let timeout
  let start = new Date()

  return (...args) => {
    const curr = new Date() - 0
    clearTimeout(timeout)
    if (curr - start >= threshold) {
      fn(...args)
      start = curr
    } else {
      timeout = setTimeout(() => {
        fn(...args)
      }, threshold)
    }
  }
}

export default throttle
