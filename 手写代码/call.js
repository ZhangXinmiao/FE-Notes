// call和apply一样，唯一的区别是参数需要枚举出来

var person = {
    name: 'zxm'
};

var a = function (arg1, arg2) {
    return this.name + arg1 + arg2 + '!';
};

Function.prototype.Mycall = function (newThis) {
    newThis.fn = this;
    var argsArr = Array.from(arguments).slice(1);
    var result =  newThis.fn(...argsArr);
    delete newThis.fn;
    return result;
}

// var result = a.call(person, 111, 222);
// console.log(result);

var result = a.Mycall(person, 111, 222);
console.log(result);