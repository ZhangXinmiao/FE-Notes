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
    // var index = 0;
    // for (var i = 0; i < cbList.length; i++) {
    //     if (cbList[i] === listener) {
    //         index = i;
    //     }
    // }
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