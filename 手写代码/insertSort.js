var insertSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentItem = arr[i];
        var preIndex = i - 1;
        while (preIndex >= 0 && arr[preIndex] > currentItem) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;            
        }
        arr[preIndex + 1] = currentItem;
        console.log(arr)
    }
    return arr;
};

var arr = [1, 5, 2, 6, 9, 10, 89, 0]; 
// [1, 5, 2, 6, 9, 10, 89, 0]
var result = insertSort(arr);
console.log(result);