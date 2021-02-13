function reverse (str) {
    var arr = str.split('');
    var left = 0, right = str.length - 1;
    while (left < right) {
        var temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
        left++;
        right--;
    }
    return arr.join('');
}

console.log(reverse('qwerty'));