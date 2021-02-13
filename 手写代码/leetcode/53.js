// https://leetcode-cn.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    var dp = [];
    dp[0] = nums[0];
    var max = dp[0];
    for (var i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        if (dp[i] > max) max = dp[i];
    }
    return max;
};

/**
 * 动态规划
 * 状态转移方程：dp[i]代表以nums[i]为结尾的最大连续子序列的和
 * dp[i] = Max(dp[i - 1] + nums[i], nums[i]); dp[0] = nums[0]
 */