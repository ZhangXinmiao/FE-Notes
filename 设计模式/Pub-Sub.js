/**
 * 发布订阅模式
 * 特点：发布者+订阅者+事件中心。发布者和订阅者解耦，通过事件中心进行调度
 * 用于解决什么样的问题：对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，并自动更新。Node Event 模块、Vue 的响应式原理都是典型的发布订阅
 * 大致思路： 核心是实现事件中心
 */
function EventEmitter () {
    this.eventMap = {};
}

EventEmitter.prototype.on = function (event, listener) {
    if (!this.eventMap[event] || !Array.isArray(this.eventMap[event])) {
        this.eventMap[event] = [];
    }
    this.eventMap[event].push(listener);
}

EventEmitter.prototype.emit = function (event, data) {
    var cbList = (this.eventMap[event] || []).slice(0);
    for (var i = 0; i < cbList.length; i++) {
        if (!Object.prototype.toString.call(cbList[i]) === '[object function]') {
            cbList[i] = function () {};
        }
        cbList[i].call(this, data);
    }
}

EventEmitter.prototype.off = function (event, listener) {
    var cbList = this.eventMap[event] || [];
    var index = cbList.indexOf(listener);
    if (index !== -1) {
        cbList.splice(index, 1);
        this.eventMap[event] = cbList;
    }
}

var emmiter = new EventEmitter();
// var cb = function (data) {
//     console.log('emit test1:', data);
// };
// emmiter.on('test1', cb);
// emmiter.emit('test1', 11);
// emmiter.on('test2', function () {
//     console.log('emit test2');
// });
// emmiter.off('test1', cb);
// emmiter.emit('test1', 11);
// emmiter.emit('test2', 12);

function a() { 
    console.log('a'); 
    emmiter.off('testOff', a); 
};
function b() { console.log('b'); }
emmiter.on('testOff', a);
emmiter.on('testOff', b);
emmiter.emit('testOff');