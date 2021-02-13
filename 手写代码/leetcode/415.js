// https://leetcode-cn.com/problems/add-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var flag = 0, finalResult = '';
    num1 = num1.split('');
    num2 = num2.split('');
    while(num1.length || num2.length) {
        var result = (+(num1.length ? num1.pop() : 0) + +(num2.length ? num2.pop() : 0) + flag);
        flag = result >= 10 ? 1 : 0;
        result = result % 10;
        finalResult = result + finalResult;
    }
    if (flag) finalResult = '1' + finalResult;
    return finalResult;
};