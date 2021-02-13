// 给定一个不含重复数字的数组arr，指定个数n，给出目标和sum，判断是否含有由n个不同数字相加得到sum的情况
function getSum (array, n, target) {
    for (var i = 0; i < array.length; i++) {
        if (n === 1 && target === array[i]) {
            console.log(i);
            return true;
        } else if (getSum(array.slice(i + 1), n - 1, target - array[i])) {
            return true;
        }        
    }
}
console.log(getSum([2, 3, 6, 4, 5], 4, 16));