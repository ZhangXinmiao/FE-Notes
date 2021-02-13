// 防抖：一定在事件触发 n 秒后才执行
function debounce (fn, delay) {
    var timer;
    return function (...arg) {
        var $this = this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply($this, arg);
        }, delay);
    };
}

var test = function (a) {
    console.log('trigger', a);
}

var newTest = debounce(test, 2000);

newTest('1');
newTest('2');
newTest('3');
newTest('4');
newTest('5');

setTimeout(function () {
    newTest('6');
}, 1000);