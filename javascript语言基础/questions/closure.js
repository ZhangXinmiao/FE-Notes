"use strict";

var myClosure = (function outerFunction() {

  var hidden = 1;

  return {
    inc: function innerFunction() {
      return hidden++;
    }
  };

}());

var a = myClosure.inc();  // 返回 1
var a1 = myClosure.inc();  // 返回 2
var a2 = myClosure.inc();  // 返回 3

console.log(a, a1, a2);
