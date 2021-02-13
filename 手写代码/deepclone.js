function deepClone (obj, map = new Map()) {
    var type = Object.prototype.toString.call(obj);
    if (type === '[object Object]' || type === '[object Array]') {
        var init = new obj.constructor;
        if (map.get(obj)) return map.get(obj);
        map.set(obj, init);
        for (item in obj) {
            init[item] = deepClone(obj[item], map);
        }
    }
    init = obj;
    return init;
}

var c = {};
var a = {
    a: {
        b: [1, 2, 3, {
            c: 3
        }],
        d: [1, [1, 2]]
    },
    d: c
}
c.f = a;

var b = deepClone(a)
console.log(JSON.stringify(b));
// console.log(a)