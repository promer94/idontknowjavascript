var num = 1 //eslint-disable-line
var myObject = {
  //eslint-disable-line
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
console.log(myObject.num) //s
console.log(num)
var sub = myObject.sub //eslint-disable-line
sub()
