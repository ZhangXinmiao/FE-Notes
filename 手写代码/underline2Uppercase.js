/**
 * 下划线转驼峰
 * replace api: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E6%8C%87%E5%AE%9A%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0
 */

function underline2Uppercase (str = '') {
    return str.replace(/\_(.{1})/g, function (match, p1) {
        return p1.toUpperCase();
    })
}

let a = 'hello_miao_miao';
console.log(underline2Uppercase(a));