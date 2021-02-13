var test = [3, 2, 1, 5, 8, 0, 65, 25];
// 2 1 3 5 0 8 25 65

function bubbleSort (array) {
    var len = array.length;
    while (len >= 1) {
        for (var i = 0; i < len; i++) {
            if (array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp; 
            }
        }
        len--;
    }
    return array;
}
console.log(bubbleSort(test));
