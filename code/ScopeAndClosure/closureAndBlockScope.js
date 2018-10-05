/* eslint-disable */
/** 2 2 will be the output
 *  The reason is that the arrow function contains the reference of a global variable i
 *  which has changed
 */
for (var i = 0; i < 2; i += 1) {
  //eslint-disable-line
  setTimeout(() => {
    //eslint-disable-line
    console.log(i)
  }, 1000)
}
/** 0 1 will be the output
 *  let in for loop have special mechanism.
 * Every time it will recreate a new lexical scope
 */
for (let i = 0; i < 2; i += 1) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}

/** ????
 *  0 will be the output
 *  What is going on there ?
 *  Only the specification could answer this question
 *  In short let i will create its own lexical scope
 *  http://www.ecma-international.org/ecma-262/6.0/#sec-for-statement-runtime-semantics-labelledevaluation
 */
for (let i = (setTimeout(() => console.log(i), 1000), 0); i < 2; i += 1) {
  i += 1
}
