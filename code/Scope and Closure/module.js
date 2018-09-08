const MyModules = (function Manager() {
  const modules = {}

  function define(name, deps, impl) {
    for (let i = 0; i < deps.length; i += 1) {
      deps[i] = modules[deps[i]]
    }
    modules[name] = impl(...deps)
  }

  function get(name) {
    return modules[name]
  }

  return {
    define,
    get
  }
})()
MyModules.define('bar1', [], () => {
  function hello(who) {
    return `Let bar1 introduce: ${who}`
  }

  return {
    hello
  }
})
MyModules.define('bar2', [], () => {
  function hello(who) {
    return `Let bar2 introduce: ${who}`
  }

  return {
    hello
  }
})

MyModules.define('foo', ['bar1', 'bar2'], (...args) => {
  function awesome() {
    const result1 = args[0].hello(0)
    const result2 = args[1].hello(1)
    return { result1, result2 }
  }

  return {
    awesome
  }
})

const foo = MyModules.get('foo')

console.log(foo.awesome())
