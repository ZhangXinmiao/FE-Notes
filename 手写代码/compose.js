function getSum (...args) {
    return args.reduce(function (accum, current) {
        return accum + current;
    });
}
function getSquare (num) {
    return num * num;
}
function addCM (num) {
    return `${num} cm`;
}

function compose () {
    var funcs = Array.from(arguments);
    var length = funcs.length;
    if (!length) throw new Error('input param null');
    return function (...args) {
        var result, i = 0;
        while (i < length) {
            result = funcs[i].apply(this, i === 0 ? args : [result]);
            i++;
        }
        return result;
    };
}

var testFunc = compose(getSum, getSquare, addCM);
var result = testFunc(1, 2, 3, 4, 5, 6);
console.log(result);
var errorFunc = compose();
console.log(errorFunc(1, 2));

/**
 * https://github.com/lodash/lodash/blob/master/flow.js
 * https://github.com/lodash/lodash/blob/master/flowRight.js
 */