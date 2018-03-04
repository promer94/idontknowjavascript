/**
 * 用闭包模拟私有方法。
 * Java中 每个类都可以有自己的私有方法。
 * JavaScript中 并没有这种原生支持。 尽管es6 引入了 class 关键字，但JavaScript中是没有类的概念的。
 * 我们可以用闭包来模拟私有方法。私有方法不仅仅有利于限制对代码的访问：
 * 还提供了管理全局命名空间的强大能力，
 * 避免非核心的方法弄乱了代码的公共接口部分
 *
 * 下方的实例展现了如何使用闭包来定义公共函数，
 * 并且令其可以访问私有函数和变量。
 * 这个方式也称为 模块模式
 */

const Counter = (function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    }
  };
})();

console.log(Counter.value()); /* console display 0*/
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* console display 2 */
Counter.decrement();
console.log(Counter.value()); /* console display 1*/

/**
 * 函数工厂形式
 */

const makeCounter = function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    }
  };
};

const Counter1 = makeCounter();
const Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */

/* 此种使用闭包的方式，提供了许多与面向对象变成相关的好处  
  特别是数据的隐藏和封装 ( encapsulation ) */
