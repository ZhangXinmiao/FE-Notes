String.prototype.hexToRGB = function () {
    hex = this.slice(1);
    var resultArr = [];
    for (var i = 0; i < hex.length; i = i + 2) {
        var str = hex.slice(i, i + 2);
        var part = parseInt(str, 16).toString();
        if (part.length < 2) {
            part = '0' + part;
        }
        resultArr.push(part);
    }
    return `rgb(${resultArr.join(',')})`;
}

String.prototype.RGBTohex = function () {
    var reg = /rgb\((.*)\)/;
    console.log(this.match(reg), this);
    var rbgArr = this.match(reg) ? this.match(reg)[1].split(',') : [];
    rbgArr = rbgArr.map(function (item) {
        var newData = Number(item).toString(16);
        return newData.length < 2 ? '0' + newData : newData;
    });
    return `#${rbgArr.join('')}`;
}

console.log('#FF0000'.hexToRGB());
console.log('rgb(255, 0, 0)'.RGBTohex());