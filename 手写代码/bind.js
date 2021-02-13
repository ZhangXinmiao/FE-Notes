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
