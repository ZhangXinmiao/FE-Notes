// 子数组之和
// 给定一个整数数组，找到和为 00 的子数组。你的代码应该返回满足要求的子数组的起始位置和结束位置
// 输入: [-3, 1, 2, -3, 4]
// 输出: [0,2] 或 [1,3]	
// 样例解释： 返回任意一段和为0的区间即可。
// 输入: [-3, 1, -4, 2, -3, 4]
// 输出: [1,5]

const subarraySum = function (nums) {
    var sum = 0;
    var start = 0;
    var end = null;
    var map = {};
    for(var i = 0;i < nums.length; i++) {
      sum += nums[i];
    //   if (sum === 0) return [start, i];
      if(map.hasOwnProperty(sum)) {
        start = map[sum] + 1;
        end = i;
      } else {
        map[sum] = i;
      }
    }
    return [start, end];
  }
  console.log(subarraySum([-3, 1, 2, -3, 4]));
  console.log(subarraySum([-3, 1, -4, 2, -3, 4]));