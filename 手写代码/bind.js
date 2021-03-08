// bind: 创建一个新的函数，新函数的this指向bind的第一个参数，剩余参数作为新建函数的参数
Function.prototype.Mybind = function () {
    var args = Array.from(arguments);
    var fn = this;
    if (typeof fn !== 'function') throw new Error('error');
    return function () {
        return fn.apply(args[0], args.slice(1))
    };
}

var person = {
    name: 'zxm',
    getName: function (arg1, arg2) {
        return `${this.name}+${arg1}+${arg2}`;
    }
};

var b = {
    
};

var test = person.getName;
// console.log(test());
// console.log(test.bind(person)());
console.log(test.Mybind(person, 'haha', '!')())


// 原有的版本有一个遗漏的点：bind的第参数作为this，其余的参数将作为bind创建的新函数的参数
Function.prototype.myBind = function () {
    var func = this;
    var args = Array.prototype.slice.call(arguments, 0);
    var newContext = args[0];
    var initArgs = args.slice(1);
    return function () {
        func.apply(newContext, initArgs.concat(Array.prototype.slice.call(arguments, 0)));
    };
};

// case
this.x = 9;    
var module = {
  x: 81,
  getX: function(a, b, c) {
    console.log(a, b, c);
    return this.x; 
  }
};

console.log(module.getX()); // ?

var retrieveX = module.getX;
console.log(retrieveX()); // ?

var boundGetX = retrieveX.bind(module, 1, 2);
console.log(boundGetX(3)); // ?
var bounfGetX1 = retrieveX.myBind(module, 1, 2);
console.log(bounfGetX1(3));