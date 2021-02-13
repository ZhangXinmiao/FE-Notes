// https://leetcode-cn.com/problems/minimum-size-subarray-sum/
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (nums.length === 0) return 0;
    var min = Infinity;
    var i = 0, j = 0;
    var currentSum = nums[0];
    while (i <= j && j < nums.length) {
        console.log(currentSum)
        if (currentSum < s) {
            j++;
            currentSum += nums[j];
            continue;
        } else {
            if (min > j + 1 - i) {
                min = j + 1 - i;
            }
            currentSum -= nums[i];
            i++;
            continue;
        }
    }
    return min === Infinity ? 0 : min;
};