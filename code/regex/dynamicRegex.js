/** Dynamically creating Regexp object*/
const name = 'harry'
const text = 'Harry is a suspicious character.'
const regexp = new RegExp(`\\b(${name})\\b`, 'gi')
console.log(text.replace(regexp, '_$1_'))

/** The search method */
console.log('  word'.search(/\S/))
console.log('    '.search(/\S/))

/** The lastIndex property
 * if the match was successful,
 * the call to exec automatically updates the lastIndex property
 *
 * The difference between the global and the sticky options is that,
 * when sticky is enabled, the match will succeed only if it start directly at lastIndex
 * whereas with global, it will search ahead for position where a match can start
 */
const pattern = /y/g
pattern.lastIndex = 3
let match = pattern.exec('xyzzy')
console.log(match.index)
console.log(pattern.lastIndex)

const global = /abc/g
console.log(global.exec('xyz abc'))
console.log(global.lastIndex)
const sticky = /abc/y
console.log(sticky.exec('xyz abc'))
console.log(sticky.lastIndex)

/** Another interesting effect of the global option is
 * that it changes the way the match method on strings works.
 * When called with a global expression, instead of returning an array similar to the returned by exec,
 * match will find all matches of the pattern in the string and return an array containing the matched strings.
 * */
console.log('Banana'.match(/an/g))

/** Looping over matches */
const input = 'A string with 3 numbers in it... 42 and 88.'
const number = /\b\d+\b/g
while ((match = number.exec(input))) {
  console.log('Found', match[0], 'at', match.index)
}
