/* eslint-disable */
/** Creating A regular expression */
const re1 = new RegExp('abc')
const re2 = /abc/

/** Testing for matches */
console.log(/abc/.test('abcde'))
console.log(/abc/.test('abxde'))

/** Sets of characters */
console.log(/[0-9]/.test('in 1992'))

/**
 * \d any digit character
 * \w An alphanumeric character("word character")
 * \s Any whitespace character (space, tab, newline, and similar)
 * \D any character that is not a digit
 * \W A non-alphanumeric character
 * \S A non-whitespace character
 * . Any character expect for newline
 *
 *
 * To invert a set of characters-that is, to express that you want to
 * match any character except the ones in the set-you can write a caret (^) character after
 * the opening bracket
 */
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
console.log(dateTime.test('01-30-2003 15:20'))
console.log(dateTime.test('30-jan-2003 15:20'))

let notBinary = /[^01]/
console.log(notBinary.test('1100100010100110'))
console.log(notBinary.test('1100100010200110'))

/** Repeating parts of a pattern */
/**
 * + indicates that the element may be repeated more than once
 *
 *
 * * indicates 0 or more
 *
 *
 * ? makes a part of a pattern optional, meaning it may occur zero times or one time.
 * {} indicates a pattern should occur a precise number of times, use braces
 * {2,} {2,4} {4}
 */

let neighbor = /neighbou?r/
console.log(neighbor.test('neighbour'))
console.log(neighbor.test('neighbor'))

dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/
console.log(dateTime.test('1-30-2003 8:45'))

/** Grouping sub-expressions */

let cartoonCrying = /boo+(hoo+)/
console.log(cartoonCrying.test('Boohooohoohoo'))

/** Matches and groups */
let match = /\d+/.exec('one two three 4 5 7')
console.log(match)

/** Word and String boundaries */
/** ^ the start of input string
 *  $ the end of input
 *  \b\b can create boundary
 */
console.log(/cat/.test('concatenate'))
console.log(/\bcat\b/.test('concatenate'))

/** Choice patterns */
/** | the pipe character denotes choice
 * between the pattern to its left and the pattern to its right
 *
 * */

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/
console.log(animalCount.test('15 pigs'))
console.log(animalCount.test('15 pigchickens'))
