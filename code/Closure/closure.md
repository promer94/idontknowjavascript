# 闭包  
---
 对于 JavaScript 的初学者来说，闭包的概念和应用都可以算的上是难点。 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) 的 JavaScript 文档对闭包的概念给出了准确的定义，也提供了简单直观的的实例，是一个非常好的学习材料。 这篇文章将从文档出发，对闭包的知识点进行一个简单的梳理。

 ---
 ## 闭包是什么
 首先，我们需要对闭包提供一个准确的定义。 在文档中，闭包的定义是 'A closure is the combination of a function and the lexical environment within which that function was declared'。这个定义是很拗口的一句话。 词法环境（lexical environment）这个描述对于初学者来说过于学术和抽象，我们只需要记住就好。真正理解定义最好方式就是通过实际的代码。 假设：
 ```js
 function init() {
    var name = "Hello"; // name 是一个被 init 创建的局部变量
    function displayName() { 
        // displayName() 是内部函数,一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    displayName(); 
}
init();
```  
通过以上的代码块来看，我们可以看到闭包实际上指的就是一个’拥有外部环境变量的函数‘。 在上面的例子中函数 displayName 调用了不属于本身的外部变量 name，不管此 displayName 函数最终是否被返回，实际上由 name 和 displayName 组成的闭包已经形成。  
```js
 function init() {
    var name = "Hello"; // name 是一个被 init 创建的局部变量
    function displayName() { 
        // displayName() 是内部函数,一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    return displayName(); // 闭包被返回
}
var fun = init();
fun();
```  
我们再来看一下这一块的新的代码，唯一的区别在于这个代码中 函数init 返回了一个函数 displayName()。也就是返回了一个闭包。通过这个返回的闭包，我们就可以访问这个函数所相关联的词法环境或者说数据。本来应该被销毁的 name 变量保留了下来，而且只能通过调用闭包的方式来访问，这也就是私有性。 

---
## 闭包有什么用呢  
实际上在上一个例子中，我们已经看到了闭包的作用，闭包可以用来模拟私有变量和方法。 它让函数和函数所操作的某些数据(环境)关联了起来。
```js
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```  
在上面的例子中 我们可以看到变量 privateCounter 和 函数 changeBy 作为下面三个函数共同的词法环境形成了闭包。 在 makeCounter()执行之后, 本该消失的词法环境被保留下来，只能通过返回的三个函数进行更改和访问。这种行为模拟出了类似 JAVA 类中的私有变量和私有方法。

---
## 在循环中创建闭包：一个常见错误；
在 ECMAScript 2015 引入 let 这个关键字之前，在循环中有一个常见的闭包创建问题。

```html
<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email"></p>
<p>Name: <input type="text" id="name" name="name"></p>
<p>Age: <input type="text" id="age" name="age"></p>
``` 

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
``` 
这段代码的结果就是，无论你选择哪一个输入框，helper 信息永远都会显示 Your age (you must be over 16)'。 原因就在于在返回的三个闭包实际上共享了 item 这一个词法环境，所以 helper 永远只显示为最后 age 的 helper。 这里就是闭包里另一个很重要的知识点，闭包只会捕获自由变量的引用，所以当 item 指向的helpText值最后变为 age 时，三个闭包的中的 item 也都变成了 age。 根据这一点我们可以将代码修改如下

```js
function setupHelpAnonymous(){
    var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

    for(var i = 0; i < helpText.length; i++){
      var item = helpText[i];
      (function() {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = function() {
          showHelp(item.help);
        }
     })();
    }
  }

  setupHelpAnonymous()
  ```   
在上面的代码片段中 我们使用了一个 IIFE (立即执行函数表达式) 对 item 这个引用进行了立刻求值。这样我们就能得到想要的结果。而在ES6中的 ’块级作用域‘ 也可以解决这个问题。
```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```  
每一次循环，都有一个新的 item 被创建，三个闭包不再共享同一个词法环境；相比匿名闭包的方式，也没有创建多余的闭包。  
