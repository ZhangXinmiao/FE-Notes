// depth first search - 找到树的深度
var root = function (val, children) {
    this.value = val;
    this.children = children;
}
var tree = new root(1, [new root(2), new root(3, [new root(5), new root(6)]), new root(4)]);
var DFS = function (root) {
    if  (!root) return [];
    var result = [];
    var stack = [];
    var depth = 1;
    stack.push(root);
    while (stack.length) {
        var popRoot = stack.pop();
        result.push(popRoot.value);
        if (popRoot.children) {
            depth++;
            stack = stack.concat(popRoot.children.reverse());
        }
    }
    // return result;
    return depth;
};

var result = DFS(tree);
console.log(result);
var result = DFS('');
console.log(result);