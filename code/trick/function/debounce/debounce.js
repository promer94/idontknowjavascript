const debounce = (func, delay = 1000) => {
  if (typeof func !== 'function') throw new Error('Invalid function')
  if (!Number.isSafeInteger(delay)) throw new Error('Invalid delay number')
  let timer
  const debounceFunc = function(...args) {
    if (timer !== undefined) clearTimeout(timer)
    timer = setTimeout(() => func(...args), delay)
  }
  const cancel = () => clearTimeout(timer)
  debounceFunc.cancel = cancel
  return debounceFunc
}
export default debounce
