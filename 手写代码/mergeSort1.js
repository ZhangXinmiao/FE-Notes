var test = [3, 2, 1, 5, 8, 0, 65, 25]; 

function mergeSort(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

// 有序数组合并排序
function merge(left, right)
{
    console.log(left, right);
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    if (left.length) result = result.concat(left);
    if (right.length) result = result.concat(right);

    return result;
}
console.log(mergeSort(test));