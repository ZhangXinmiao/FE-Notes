// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]

// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

function generateParentthesis (n) {
    var result = [];
    var leftChar = '(', rightChar = ')';
    var select = function (leftRemainNumber, rightRemainNumber, currentStr) {
        console.log(leftRemainNumber, rightRemainNumber, currentStr);
       if ((!leftRemainNumber && !rightRemainNumber) || currentStr.length === 2 * n) {
            result.push(currentStr);
            return;
       }
       if (!leftRemainNumber && rightRemainNumber) {
           currentStr = currentStr + rightChar;
           select(0, rightRemainNumber - 1, currentStr);
       } else if (leftRemainNumber === rightRemainNumber || (leftRemainNumber && !rightRemainNumber)) {
           currentStr = currentStr + leftChar;
           select(leftRemainNumber - 1, rightRemainNumber, currentStr);
       } else {
           select(leftRemainNumber - 1, rightRemainNumber, currentStr + leftChar);
           select(leftRemainNumber, rightRemainNumber - 1, currentStr + rightChar);
       }
    };
    select(n - 1, n, leftChar);
    return result;
}

console.log(generateParentthesis(2));
console.log(generateParentthesis(3));
console.log(generateParentthesis(4));