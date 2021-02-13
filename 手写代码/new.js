function MyNew (constructorFunc) {
    // var obj = Object.create(constructorFunc);
    var obj = {};
    obj.__proto__ = constructorFunc.prototype;
    constructorFunc.apply(obj);
    return obj;
}

function A () {
    this.funcName = 'a';
}

var a = MyNew(A);
console.log(a, a.funcName);
console.log(a instanceof A);