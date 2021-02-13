// 两个字符串是变位词
// 写出一个函数 anagram(s, t) 判断两个字符串是否可以通过改变字母的顺序变成一样的字符串。
// 什么是 Anagram?在更改字符顺序后两个字符串可以相同
// 输入: s = "ab", t = "ab"
// 输出: true
// 输入:  s = "abcd", t = "dcba"
// 输出: true
// 输入:  s = "ac", t = "ab"
// 输出: false

function anagram (s1, s2) {
    if (s1.length !== s2.length) return false;
    var map = new Map();
    for (var i = 0; i < s1.length; i++) {
        map.set(s1[i], 1);
    }
    for (var i = 0; i < s2.length; i++) {
        if (!map.get(s2[i])) return false;
    }
    return true;
}

console.log(anagram('ab', 'ba')); // true
console.log(anagram('abcd', 'dcba')); // true
console.log(anagram('abcd', 'eacb')); // false