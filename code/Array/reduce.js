/* eslint-disable */
Array.prototype.map = function(func) {
  return this.reduce((a, b, index, array) => {
    return a.concat(func(b, index, array))
  }, [])
}

Array.prototype.filter = function(func) {
  return this.reduce((a, b, index, array) => {
    return func(b, index, array) === true ? a.concat(b) : a
  }, [])
}
