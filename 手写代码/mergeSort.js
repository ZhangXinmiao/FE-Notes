// https://www.runoob.com/w3cnote/merge-sort.html
function merge (arr1, arr2) {
    var resultArr = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] > arr2[0]) {
            resultArr.push(arr2.shift());
        } else {
            resultArr.push(arr1.shift());
        }
    }
    if (arr1.length) resultArr = resultArr.concat(arr1);
    if (arr2.length) resultArr = resultArr.concat(arr2);
    return resultArr;
}
function mergeSort (arr) {
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

var arr = [0, 1, 5, 9, 10, 6, 89];
console.log(mergeSort(arr));