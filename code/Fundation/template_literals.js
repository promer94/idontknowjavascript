const name = 'John'
const age = 35
const job = 'Frontend developer'
const city = 'Miamai'

function hello() {
  return 'hello'
}
let html

const html = `
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Function: ${hello()}</li>
    <li>${age > 30 ? hello() : age}</li>
    </ul>
`

document.body.innerHTML = html
