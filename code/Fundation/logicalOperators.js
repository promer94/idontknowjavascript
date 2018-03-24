/**
 * The logical operators && and || handle value of different
 * They will convert the value on their left side to Boolean type
 * in order to decide what to do, but depending on the operator
 * the result of that conversion, they will return either the original
 * left-hand value or the right hand value
 */

/** The || operator, will return the value to its left when
 * it can be converted to true and will return the value on its
 * right otherwise.
 */

console.log(null || 'user'); // user
console.log('Agnes' || 'user'); // Agnes

/** If you have a value that might be empty
 * you can put || after it with a replacement value
 */
