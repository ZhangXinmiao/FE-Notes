function deepClone (obj, map = new Map()) {
    var type = Object.prototype.toString.call(obj).toLowerCase();
    // console.log(type)
    var copy;
    if (type === '[object array]' || type === '[object object]'){
        if (map.get(obj)) {
            return map.get(obj);
        }
        map.set(obj, obj);
        copy = type === '[object array]' ? [] : {};
        for (item in obj) {
            copy[item] = deepClone(obj[item], map);
        }
    } else {
        copy = obj;
    }
    return copy;
}

var case1 = deepClone([1, 2, 3, 4, 5]);
console.log(case1);

var case2 = deepClone([1, [2, [3, [4, 5]]]]);
console.log(JSON.stringify(case2));

var case3 = deepClone({a: 1, b: 2});
console.log(case3);

var case4 = deepClone({a: 1, b: { c: 3 }});
console.log(case4);

var case5 = deepClone([1, {a: [1, {b: 'hahaha'}]}]);
console.log(JSON.stringify(case5));

var a = { b: 1 };
var b = {c: 1, d: a};
a.a = b;
// console.log(b)
var case6 = deepClone(b);
console.log(case6);

