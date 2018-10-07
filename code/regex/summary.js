/** Summary
 * /abc/ A sequence of characters
 * /[abc]/ Any character from a set of characters
 * /^[abc]/ Any character not in a set of characters
 * /[0-9]/ Any character in a range of characters
 * /x+/ One or more occurrences of the pattern x
 * /x+?/ One or more occurrences, non-greedy
 * /x* Zero or more occurrences
 * /x?/ Zero or one occurrences
 * /x{2,4}/ Two to four occurrence
 * /(abc)/ A group
 * /a|b|c/ Any one of several patterns
 * /\d/ Any digit character
 * /\w/ An alphanumeric character('word character')
 * /\s/ Any whitespace character
 * /./ Any character except newlines
 * /\b/ A word boundary
 * /^/ Start of input
 * /$/ End of input
 */

verify(/ca[rt]/, ['my car', 'bad cats'], ['camper', 'high art'])

verify(/pr?op/, ['pop culture', 'mad props'], ['plop', 'prrrop'])

verify(
  /ferr(et|y|ari)/,
  ['ferret', 'ferry', 'ferrari'],
  ['ferrum', 'transfer A']
)

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source === '...') return
  for (const str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`)
    }
  for (const str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`)
    }
}
