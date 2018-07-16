function foo() {
  console.log(a); // eslint-disable-line
  console.log(b); // eslint-disable-line
}

function bar() {
  var a = 3; // eslint-disable-line
  var b = 11; // eslint-disable-line
  foo(b)
}

var a = 2; // eslint-disable-line
var b = 10; //eslint-disable-line
bar()
