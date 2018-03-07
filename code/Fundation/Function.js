//Function declaration
function greet(firstName = 'John', lastName = 'Will') {
  return `${firstName} ${lastName}`;
}
console.log(greet());
console.log(greet);
//Function expession

const greetFunction = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};
console.log(greetFunction('John', 'Will'));
console.log(greetFunction);

//Property Method
const todo = {
  add() {
    return 2;
  }
};
