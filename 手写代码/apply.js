// apply 用指定的this和一个数组形式的参数来调用函数

var person = {
    name: 'zxm'
};

var a = function (arg1, arg2) {
    return this.name + arg1 + arg2 + '!';
};

Function.prototype.Myapply = function (newThis, args) {
    newThis.fn = this;
    var result = newThis.fn(...args);
    delete newThis.fn;
    return result;
}

// var result = a.apply(person, ['111', '222']);
// console.log(result);

var result = a.Myapply(person, ['111', '222']);
console.log(result);