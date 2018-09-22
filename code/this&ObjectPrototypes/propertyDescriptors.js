const myObject = {}
Object.defineProperty(myObject, 'a', {
  value: 2,
  configurable: true, // The ability for you to modify its descriptor definition
  writable: true, // The ability for you to change the value of a property
  enumerable: true // If a property will show up in certain object-property enumerations
})

const myNewObject = {
  // define a getter for `a`
  get a() {
    return this._a_
  },

  // define a setter for `a`
  set a(val) {
    this._a_ = val * 2
  }
}

myNewObject.a = 2

console.log(myNewObject.a)
