// function getSum (arr = []) {
//     console.log(arr)
//     return arr.reduce((accum, current) => {
//         return accum + current;
//     });
// }

// function currying (fn) {
//     var finalArgs = [];
//     return function () {
//         var args = Array.from(arguments);
//         console.log(args, args.length);
//         if (args.length) {
//             finalArgs.push(args[0]);
//             console.log('push finalArgs', finalArgs);
//             return arguments.callee;
//         } else {
//             console.log('finalArgs', finalArgs)
//             return fn.apply(this, [finalArgs]);
//         }
//     }
// }

// var add = currying(getSum);
// var a = add(1)(2)(3)(4)(5)();
// console.log(a);

function getSum (arr = []) {
    return arr.reduce((accum, current) => {
        return accum + current;
    });
}

function currying (fn) {
    var finalArgs = [];
    var $this = this;
    return function () {
        var args = Array.from(arguments);
        if (args.length) {
            finalArgs = finalArgs.concat(args);
            return arguments.callee;
        } else {
            return fn.call($this, finalArgs);
        }
    };
}

var add = currying(getSum);
console.log(add(1)(2)(3)(4)());
//console.log(add(1)());
//add(1)(2)();
//console.log(getSum([1,2,3]))

