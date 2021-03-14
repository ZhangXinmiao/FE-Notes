函数的this在调用时绑定，取决于函数的调用位置
- 普通函数调用
  - 严格模式：绑定到undefined
  - 非严格模式：绑定到全局对象
- 对象的函数调用：绑定到对象
- new 调用：绑定到新创建的对象
- call和apply调用：
  - 严格模式：绑定到传入的第一个参数,如果穿的是值，不会被包装成对象
  - 非严格模式：绑定到传入的第一个参数,如果传的是置，会被包装成对象
- 箭头函数：没有自己的this，this是词法作用域的this

举个例子：
```
this.x = 9;    
var module = {
  x: 81,
  getX: function() { return this.x; }
};

console.log(module.getX());  // ?  作为对象的函数调用

var retrieveX = module.getX;
console.log(retrieveX());  // ? 普通的函数调用

var boundGetX = retrieveX.bind(module);
console.log(boundGetX());  // ? bind返回了一个新的function 赋予了新的this指向

> 81 9 81
```