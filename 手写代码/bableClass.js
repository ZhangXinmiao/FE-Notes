function A () {
    this.funcName = 'a';
}

A.staticName = 'funcA';

A.prototype.getName = function () {
    console.log(this.funcName);
}

function B () {
    A.call(this)
};

function inherits (subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype)
    // console.log(subClass.__proto__.staticName, superClass.staticName)
    Object.setPrototypeOf(subClass, superClass); 
    // 等同于 subClass.__proto__ = superClass; 不过这种形式不推荐 最好是用Object.setPrototype
    // static 属性的继承
}

// function _inherits(subClass, superClass) {
//     if (typeof superClass !== "function" && superClass !== null)
//     { throw new TypeError("Super expression must either be null or a function"); }
//     subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
//      if (superClass) Object.setPrototypeOf(subClass, superClass); 
// }
// function inheritPrototype(subType, superType){
//     var prototype = Object(superType.prototype);
//     prototype.constructor = subType;
//     subType.prototype = prototype;
// }


inherits(B, A);
// // B.prototype = A.prototype;
var b = new B();
console.log(b.funcName)
b.getName();
console.log(B.staticName);

