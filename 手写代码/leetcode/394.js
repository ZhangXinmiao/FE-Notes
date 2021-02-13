/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    s = s.split('');
    var ratioStack = [];
    var strStack = [];
    var subStr = '', resultStr = '';
    while(s.length) {
        var currentChar = s.shift();
        if (currentChar === '[') {
            subStr = '';
            continue;
        } else if (currentChar === ']') {
            strStack.push(subStr);
            subStr = '';
            console.log(ratioStack, strStack)
            var no = ratioStack.pop();
            var str = strStack.pop();
            str = str + subStr;
            for (var i = 0; i < +no; i++) {
                subStr += str;
            }
            resultStr += subStr;
            subStr = '';
            continue;
        } else if (Number.isNaN(parseInt(currentChar))) {
            // 遇见了字母
            subStr += currentChar;
        } else if (!Number.isNaN(parseInt(currentChar))) {
            // 遇见了数字
            if (!ratioStack.length) {
                resultStr += subStr;
            } else {
                strStack.push(subStr);
            }
            ratioStack.push(currentChar);
        }
    }
    resultStr += subStr;
    return resultStr;
};

// var n = decodeString("3[a]2[bc]");
var n = decodeString('3[a2[c]]');
// var n = decodeString('abc3[cd]xyz');
console.log(n);