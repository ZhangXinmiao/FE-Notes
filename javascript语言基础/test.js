function throttle (fn, time) {
    var timer;
    return function () {
        var argArr = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fn.apply(this, argArr);
            }, time);
        }
    };
}

function debounce (fn, delay) {
    var timer;
    return function () {
        var argArr = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, argArr);
        }, delay);
    };
}
