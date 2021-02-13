// 二分查找
function binarySearch (array, target) {
    var start = 0, end = array.length - 1;
    if (target < array[start] || target > array[end]) return -1;
    while (start <= end) {
        var mid = Math.ceil((end - start) / 2) + start;
        console.log(mid, start, end)
        if (array[mid] > target) {
            end = mid - 1;
        } else if (array[mid] < target) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

// console.log(binarySearch([5,13,19,21,21,37,56,64,75,80,88,92], 77));
console.log(binarySearch([5,13,19,21,21,37,56,64,75,77,88,92], 77));
// 5,13,19,21,21,37
// 56,64,75,80,77,92

// 没有 返回 -1 有 返回 index