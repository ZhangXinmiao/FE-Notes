// let list = ['abc', 'abb', 'abbba']
// 求最长公共部分 例如上面应该输出 ab
function getMaxLen (str, array) {
    var allHasFlag = true;
    for (var i = 0; i < array.length; i++) {
        allHasFlag = allHasFlag && array[i].indexOf(str);
    }
    return allHasFlag ? str.length : 0;
}
function getMaxLengthCommon (array) {
    // 获取最短的字符串 用最短的来找
    var minlength = array[0].length;
    var minStrIndex = 0;
    for (var i = 1; i < array.length; i++) {
        var currentLength = array[i].length;
        if (minlength > currentLength) {
            minlength = currentLength;
            minStrIndex = i;
        }
    }
    var minStr = array[minStrIndex];
    array.splice(minStrIndex, 1);
    
    var start = 0, end = minStr.length - 1;
    var maxLength = getMaxLen(minStr, array);
    while(start < end) {
        var leftMax = getMaxLen(minStr.substring(start - 1, end - 1), array);
        var rightMax = getMaxLen(minStr.substring(start, end), array);
        if (!leftMax && !rightMax) {
            start++;
            end++;
            continue;
        }
        maxLength = Math.max(leftMax, rightMax);
        break;
    }
    return maxLength;
}

var result = getMaxLengthCommon(['abc', 'abb', 'abbba']);
console.log(result);