/* eslint-disable */
var num = 1
var myObject = {
  num: 2,
  add() {
    this.num = 3
    ;(function() {
      console.log(`${this.num}`)
      this.num = 4
    })()
    console.log(`${this.num}`)
  },
  sub() {
    console.log(`${this.num}`)
  }
}
myObject.add()
console.log(myObject.num)
console.log(num)
var sub = myObject.sub
sub()
