// 防抖函数：延迟一定事件执行函数，在一定事件内反复触发，以最后一次为准
function debounce (fn, time) {
    var timer;
    return function () {
        var arg = arguments;
        var $this = this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply($this, arg);
        }, time);
    }
}

function getA (a) {
    console.log(a);
}
var debounce = debounce(getA, 1000);
debounce(1);
debounce(2);
debounce(3);
debounce(4);
debounce(5);
setTimeout(function () {
    debounce(6);
}, 2000);