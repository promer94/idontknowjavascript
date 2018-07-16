/**
 * 如果不是某些特定任务需要使用闭包，
 * 在其他函数中创建函数是不明智的，
 * 闭包在处理速度和内存消耗方面对脚本性能是有负面影响的
 *
 * 例如在创建新的对象或者类时，方法通常应该关联与对象的原型，而不是定义到对象的构造器中。
 * 如果定义到构造器中，或导致构造器每次被调用时，方法都会被重新赋值一次 （对象创建时）
 *
 */

/**
 * 此段代码并未利用到闭包的好处。
 */
function MyObject(name, message) { //eslint-disable-line
  this.name = name.toString()
  this.message = message.toString()
  this.getName = function() {
    return this.name
  }

  this.getMessage = function() {
    return this.message
  }
}

/**
 * 继承的原型可以为所有对象共享，不必在每一次创建时对象时定义方法。
 */
function MyObject1(name, message) { //eslint-disable-line
  this.name = name.toString()
  this.message = message.toString()
}
MyObject1.prototype.getName = function() {
  return this.name
}
MyObject1.prototype.getMessage = function() {
  return this.message
}
