// 最大子数组
// 给定一个整数数组，找到一个具有最大和的子数组，返回其最大和。
// 输入：[-2, 2, -3, 4, -1, 2, 1, -5, 3]
// 输出：6
// 解释：符合要求的子数组为[4,−1,2,1]，其最大和为 6。
// 输入：[1,2,3,4]
// 输出：10
// 解释：符合要求的子数组为[1,2,3,4]，其最大和为 10。
var getSum = function (array) {
    console.log(array)
    return array.reduce(function (accum, current) {
        return accum + current;
    });
};

var getMaxSubArray = function (array) {
    var maxSum = getSum(array);
    var start = 0, end = array.length - 1;
    var maxStart = start, maxEnd = end;
    while (start < end) {
        var leftSum = getSum(array.slice(start, end));
        var rightSum = getSum(array.slice(start + 1, end + 1));
        if (maxSum < Math.max(leftSum, rightSum)) {
            if (leftSum > rightSum) {
                maxSum = leftSum;
                maxStart = start;
                maxEnd = end - 1;
            } else {
                maxSum = rightSum;
                maxStart = start + 1;
                maxEnd = end;
            }
        }
        start++;
        end--;
    }
    console.log('-----', maxStart, maxEnd, array.slice(maxStart, maxEnd + 1));
    return maxSum;
}

console.log(getMaxSubArray([1, 2, 3, 4]));
console.log(getMaxSubArray([-2, 2, -3, 4, -1, 2, 1, -5, 3]));