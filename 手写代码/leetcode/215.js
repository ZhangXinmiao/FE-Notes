// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var quickSort = function (nums) {
    if (nums.length <= 1) return nums;
    var left = [];
    var right = [];
    var flagIndex = Math.ceil(nums.length / 2)
    var flag = nums.splice(flagIndex, 1)[0];
    for (var i = 0; i < nums.length; i++) {
        if (flag > nums[i]) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    return quickSort(left).concat(flag).concat(quickSort(right));
}
var findKthLargest = function(nums, k) {
    return quickSort(nums).reverse()[k - 1];
};