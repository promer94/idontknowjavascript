a = 2
var a //eslint-disable-line

console.log(a) // 2

/**
 *  when you see var a =2, it actually contains two statements
 *  var a  a = 2
 * The first statement, the declaration is processed during the compilation phase
 * The second statement, the assignment, is left in place for the execution phase.
 * The function and variable declaration is Hoisted.
 */
