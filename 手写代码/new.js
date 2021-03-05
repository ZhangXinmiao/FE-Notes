// function MyNew (constructorFunc) {
//     // var obj = Object.create(constructorFunc);
//     var obj = {};
//     obj.__proto__ = constructorFunc.prototype;
//     constructorFunc.apply(obj);
//     return obj;
// }

// function A () {
//     this.funcName = 'a';
// }

// var a = MyNew(A);
// console.log(a, a.funcName);
// console.log(a instanceof A);

function MyNew (func) {
    var obj = Object.create(func.prototype);
    var result = func.apply(obj, Array.from(arguments).slice(1));
    return Object.prototype.toString.call(result).toLowerCase() === '[object object]' ? result : obj;
}

function A (initA, initB = 0) {
    this.a = initA + initB;
    return 1;
    // return {
    //     a: this.a,
    //     b: 111
    // }
}

var a = MyNew(A, 2);
var a1 = new A(2);

console.log(a instanceof A, a);
console.log(a1 instanceof A, a1);
