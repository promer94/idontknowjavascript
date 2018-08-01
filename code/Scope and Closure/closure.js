/**
 * JavaScript 闭包
 *
 * 闭包是函数和声明该函数的词法环境的组合
 *
 * A closure is the combination of
 * a function
 * and
 * the lexical environment within which that function was declared.
 *
 */
function init() {
  var name = 'Mozilla' //eslint-disable-line
  function displayName() {
    console.log(name) //eslint-disable-line
  }
  displayName()
}
init() // console will display Mozilla

/**
 * 词法作用域所使用的域， 是变量在代码中声明的位置所决定的。 嵌套的的函数可以访问其在外部声明的变量。
 *
 */

/**
 * Closure 闭包
 */

function makeFunc() {
  const name1 = 'Mozilla1'
  function displayName() {
    console.log(name1) //eslint-disable-line
  }
  return displayName
}
const myFunc = makeFunc()
myFunc() //console will display Mozilla

/**
 * 从以上例子中可以看到 name作为一个局部变量，在makeFunc执行完之后 依然保留在内存中。 这与 Java 之类的
 * 其他编程语言是不同的。
 *
 * 为什么会有这样的结果， 原因就是 makeFunc() 在JavaScript中组成了一个闭包。 闭包是函数与声明该函数的词法
 * 环境的组合。 这个环境包括任何在闭包被创建时存在的局部变量。 在以上的例子中， myFunc() 是执行 makeFunc 创建的 displayName
 * 函数实例的引用， 而displayName 实例 仍然可以访问他词法作用域的中的变量，这个例子中 就是 name。  所以 name 仍然可以继续被访问到。
 *
 */

/**
 * 在下面的这个例子中我们可以看到，add5 跟 add10 都是闭包。
 * 他们共享相同的函数定义，但是保存了不同的词法环境。在 add5的环境中 x 为 5。
 * 而在 add10的环境中 x 为 10
 */
function makeAdder(x) {
  return function(y) {
    return x + y
  }
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.log(add5(2)) //eslint-disable-line
console.log(add10(2)) //eslint-disable-line

/**
 * 闭包的实际作用
 * 闭包允许将函数与其所操作的某些数据（环境）关联起来。
 * 面向对象编程中， 对象允许我们将某些数据 （对象的属性） 与一个或者多个方法联系起来。
 *
 */
