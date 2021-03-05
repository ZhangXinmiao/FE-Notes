// 使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 
// 原生sort是对数组元素做字符串转换，对字符串做的比较：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

var arr = [3, 15, 8, 29, 102, 22];
function sort (arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}
console.log(sort(arr));
