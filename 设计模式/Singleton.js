/**
 * 单例模式
 * 特点：单例类只有一个实例
 * 用于解决什么样的问题：某个类在全局频繁销毁和创建，利用单例模式节省系统资源
 * 大致思路：判断系统是否存在这个单例实例，如果有就返回，没有就创建
 */

var singleton = function (constructorFunc) {
    var instance;
    var createInstance = Object.prototype.toString.call(constructorFunc) === '[object Function]' ? constructorFunc : function () {};

    return {
        getInstance: function () {
            if (!instance) {
                instance = new createInstance();
            }
            return instance;
        }
    };
}
function A () {
    this.a = 11;
}
var instance = singleton(A);
var a1 = instance.getInstance();
var a2 = instance.getInstance();
console.log(a1 === a2);