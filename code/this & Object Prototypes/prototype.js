const myObject = { a: 2 }

const newObject = Object.create(myObject)
newObject.b = 1
for (const k in newObject) {
  //eslint-disable-line
  console.log(k) //b , a
}
