// 实现 (5).add(3).minus(2) 功能

Number.prototype.add = function (num = 0) {
    num = parseFloat(num);
    if (isNaN(num)) {
        throw new Error('请输入数字或者数字字符串～');
    };
    return this.valueOf() + num;
}

Number.prototype.minus = function (num = 0) {
    num = parseFloat(num);
    if (isNaN(num)) {
        throw new Error('请输入数字或者数字字符串～');
    };
    return this.valueOf() - num;
}

var result = (5).add(3).minus(2);
console.log(result);
