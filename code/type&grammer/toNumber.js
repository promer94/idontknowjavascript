const a = {
  valueOf() {
    return '42'
  }
}

const b = {
  toString() {
    return '42'
  }
}

const c = [4, 2]
c.toString = function() {
  return this.join('') // "42"
}

Number(a) // 42
Number(b) // 42
Number(c) // 42
Number('') // 0
Number([]) // 0
Number(['abc']) // NaN
