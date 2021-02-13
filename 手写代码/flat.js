var test = [[0],[2,3,4],1,[1,[2,3]]];

function flatten (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

function flatten2 (arr) {
    return arr.reduce((pre, current) => {
        return pre.concat(Array.isArray(current) ? flatten2(current) : current);
    }, []);
}

console.log(flatten(test));
console.log(flatten2(test));