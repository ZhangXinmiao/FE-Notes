// breadth first search
var root = function (val, children) {
    this.value = val;
    this.children = children;
}
var tree = new root(1, [new root(2), new root(3, [new root(5), new root(6)]), new root(4)]);
var BFS = function (root) {
    var result = [];
    var queue = [];
    queue.push(root);
    while(queue.length) {
        var length = queue.length;
        for (var i = 0; i < length; i++) {
            console.log(i, queue[i])
            if (queue[0].children) queue = queue.concat(queue[0].children);
            console.log(queue)
            var unShiftItem = queue.shift();
            result.push(unShiftItem.value);
        }
    }
    return result;
};

var result = BFS(tree);
console.log(result);