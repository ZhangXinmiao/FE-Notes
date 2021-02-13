function quickSort (arr) {
    if (arr.length <= 1) return arr;
    var start = 0, end = arr.length - 1;
    var mid = Math.floor((end - start) / 2);
    var midItem = arr.splice(mid, 1)[0];
    var leftArr = [], rightArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < midItem) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return quickSort(leftArr).concat(midItem).concat(quickSort(rightArr));
}

var arr = [0, 1, 5, 9, 10, 6, 89];
console.log(quickSort(arr));