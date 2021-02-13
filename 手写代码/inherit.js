function Shape () {
    this.type = 'default';
}

Shape.prototype.getType = function () {
    console.log(this.type);
}

function Square () {}

// 原型链继承
Square.prototype = new Shape();
var s = new Square();
s.getType(); // 'default'
/**
 * 原型链继承的两个问题：
 * 1、实例会共享属性
 * 2、子类实例化时无法传参
 */

借用构造函数
function Shape (type) {
    this.type = type || 'default';
}

Shape.prototype.getType = function () {
    console.log(this.type);
}

function Square (type) {
    Shape.call(this, type);
}

var s = new Square('square');
console.log(s.type); // 'square'
/**
 * 可以传参了，但是函数无法复用
 */

//  组合继承
function Shape (type) {
    this.type = type || 'default';
}

Shape.prototype.getType = function () {
    console.log(this.type);
}

function Square (type) {
    Shape.call(this, type);
}

Square.prototype = new Shape();
var s = new Square('square');
s.getType(); // 'square'

// 原型式继承 Object.create(superClass);

// 组合寄生式继承
function inherit (subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype, {
        constructor: {
            value: subClass
        }
    });
}

function Shape (type) {
    this.type = type || 'default';
}

Shape.prototype.getType = function () {
    console.log(this.type);
}

function Square (type) {
    Shape.call(this, type);
}

inherit(Square, Shape);
var s = new Square('square');
s.getType(); // 'square'
/**
 * ES6的class extend底层实现，比理想的一种继承方式，只调用了一次父类构造函数
 */