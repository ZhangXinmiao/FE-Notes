// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))
/**   
 * 示例 1：
 * nums1 = [1, 3]
 * nums2 = [2]
 * 中位数是 2.0 3 / 2 1.5
 * 示例 2：
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 中位数是(2 + 3) / 2 = 2.5  1 2 3 4 
 */

function findMedian (arr1, arr2) {
    var len = arr1.length + arr2.length;
    var mid = len / 2;
    var resultArr = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            resultArr.push(arr1.shift());
        } else {
            resultArr.push(arr2.shift());
        }
    }
    resultArr = resultArr.concat(arr1.length ? arr1 : arr2);
    console.log(resultArr)
    if (len % 2) {
        return resultArr[Math.floor(mid)];
    } else {
        return (resultArr[mid - 1] + resultArr[mid]) / 2;
    }
}

var nums1 = [1, 3];
var nums2 = [2];
// var nums1 = [1, 2];
// var nums2 = [3, 4];
var result = findMedian(nums1, nums2);
console.log(result);
