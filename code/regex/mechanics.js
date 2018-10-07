/** Backtracking
 * When entering a branch, it remembers its current position
 * so that it can go back and try another branch if the current one does not work out.
 * The matcher stops as soon as it finds a full match.
 *
 *
 *
 * Backtracking also happens for repetition operators like + and *.
 */
let example = /\b([01]+b|[\da-f]+h|\d+)\b/.exec('012b')
console.log(example)
example = /^.*x/.exec('abcxe')
console.log(example)

/** The replace method
 *  The first argument can also be a regular expression,
 * the first match of the regular expression is replaced
 */

console.log('papa'.replace('p', 'm'))
console.log(
  'Liskov, Barbara\nMcCarthy, John\nWadler, Philip'.replace(
    /(\w+), (\w+)/g,
    '$2 $1'
  )
)

const s = 'the cia and fbi'
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()))

const stock = '1 lemon, 2 cabbages, and 101 eggs'
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1
  if (amount === 1) {
    // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1)
  } else if (amount === 0) {
    amount = 'no'
  }
  return `${amount} ${unit}`
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne))

/** Greedy
 *  + * ? and {} are greedy
 */
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, '')
}
console.log(stripComments('1 + /* 2 */3'))
// → 1 + 3
console.log(stripComments('x = 10;// ten!'))
// → x = 10;
console.log(stripComments('1 /* a */+/* b */ 1'))
