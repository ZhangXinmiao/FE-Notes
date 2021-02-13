// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    var arr = s.split('');
    var targetArr;
    var maxLen = 1;
    for (var i = 0, j = 1; j < arr.length; j++) {
        targetArr = arr.slice(i, j);
        if (targetArr.indexOf(arr[j]) === -1) {
            targetArr.push(arr[j]);
            if (targetArr.length > maxLen) maxLen = targetArr.length;
        } else {
            if (j - i > maxLen) maxLen = j - i;
            i++;
            j--;
        }
    }
    if (!i) return arr.length;
    return maxLen;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    var arr = s.split('');
    var start = 0; end = 0, max = 1, len = s.length;
    while (end < len - 1) {
        var currentStr = s.slice(start, end + 1);
        console.log(currentStr, start, end)
        var index = currentStr.indexOf(arr[end + 1]);
        if (index > -1) {
            start = start + index + 1;
        } else {
            end++;
        }
        if (end - start + 1 > max) max = end - start + 1;
    }
    return max;
};