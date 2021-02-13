// 最长上升连续子序列
// 给定一个整数数组（下标从 0 到 n-1， n 表示整个数组的规模），请找出该数组中的最长上升连续子序列。
// （最长上升连续子序列可以定义为从右到左或从左到右的序列。）
// 输入: [10, 9, 2, 5, 3, 7, 101, 18]
// 输出: 3 
// 解释: 最长的上升子序列是 [3,7,101]，它的长度是 3。

// 双指针？

function getLongest (array) {
    var start = 0, end = 0;
    var max = 0;
    var maxStart = start, maxEnd = end;
    while (end < array.length - 1) {
        if (array[end + 1] >= array[end]) {
            end++;
        } else {
            start = end + 1;
            end++;
        }
        var currentLength = end - start + 1;
        if (currentLength >= max) {
            max = currentLength;
            maxStart = start;
            maxEnd = end;
        };
    }
    console.log(array.slice(maxStart, maxEnd + 1));
    return max;
}

console.log(getLongest([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(getLongest([10, 9, 2, 5, 3, 7, 101, 18, 19, 30, 35, 45]));
// end 101 start 2
// 