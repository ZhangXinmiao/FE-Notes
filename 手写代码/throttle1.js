// 节流：一定时间内尽管频繁触发，只执行一次
function throttle (fn, delay) {
    var timer;
    return function (...arg) {
        var $this = this;
        if (!timer) {
            timer = setTimeout(function () {
                fn.apply($this, arg);
                timer = null;
            }, delay);
        }
    };
}

var test = function (a) {
    console.log('trigger', a);
}

var newTest = throttle(test, 2000);

newTest('1');
newTest('2');
newTest('3');
newTest('4');
newTest('5');

setTimeout(function () {
    newTest('6');
}, 3000);