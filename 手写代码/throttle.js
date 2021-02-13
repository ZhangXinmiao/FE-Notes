// 节流函数：一段时间内只执行一次函数（稀释事件执行速率）
function throttle (func, delay) {
    var timer;
    var args;
    return function () {
        var $this = this;
        args = arguments;
        if (!timer) {
            timer = setTimeout(function () {
                timer = null;
                func.apply($this, args);
            }, delay);
        }
    }
}


function getA (a) {
    console.log(a);
}

var throttleA = throttle(getA, 1000);
throttleA(1);
throttleA(2);
throttleA(3);
throttleA(4);
throttleA(5);
setTimeout(function () {
    throttleA(6);
}, 2000);
