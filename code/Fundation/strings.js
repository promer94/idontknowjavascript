const firstName = 'William'
const lastName = 'Johnson'
const str = 'Hello i am a student who is studying javascript'
let val

val = firstName + lastName // WilliamJohnson
val = `${firstName} ${lastName}` // William Johnson;

// val = 'This's awesome, i cant't wait'; This won't work.

val = "This's awesome, i cant't wait"
val = "This's awesome, i cant't wait"

val.toLowerCase()
val.toUpperCase()

/* Length */
val.length // 29

/* concat() */
val = firstName.concat(' ', lastName) // William Johnson;

/* Change case */
val.toLowerCase()
val.toUpperCase()

/* By index      but string is not an Array */

val[0] // T

/* indexOf() */
val = firstName.indexOf('W') // 0

/* substring() */
val = firstName.substring(0, 4)

/* str = Hello i am a student who is studying javascript * /
/* slice()  */
val1 = str.slice(0, 5) // Hello
val2 = str.slice(0, 6) // Hello[sapce here]
console.log(val1 === val2) // false
val3 = str.slice(-3) // ipt
val4 = str.slice(0, -5) // Hello i am a student who is studying javas

/* split()  Difference between string and array */
console.log(typeof str)
str1 = str.split(' ')
console.log(typeof str1)
console.log(str1.reverse())

/* replace() */
val = str.replace('javascript', 'java') // Hello i am a student who is studying java;

/* include() */
val = str.includes('java') // True;
