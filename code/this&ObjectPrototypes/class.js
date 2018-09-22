/** The new keyword is an indirect, round-about way to link two object.
 *  Prototype inheritance don't need class. It just link two object.
 *  'Constructor is any function called with new Keyword'
 *  Another thing should be noticed that the first.name and first.age is its OwnProperty
 *  rather than from the father.
 *
 */
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayName = function() {
  console.log(this.name)
}

Person.prototype.sayAge = function() {
  console.log(this.age)
}

const first = new Person('Xu Yixuan', 23)
first.sayName()
first.sayAge()

console.log(first.hasOwnProperty('name')) //eslint-disable-line
console.log(first.hasOwnProperty('age')) //eslint-disable-line
console.log(first.hasOwnProperty('sayName')) //eslint-disable-line
console.log(first.hasOwnProperty('sayAge')) //eslint-disable-line
