// https://leetcode-cn.com/problems/compare-version-numbers/
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    version1 = version1.split('.');
    version2 = version2.split('.');
    while (version1.length && version2.length) {
        var a = +version1.shift();
        var b = +version2.shift();
        if (a === b) {
            continue;
        } else if (a > b) {
            return 1;
        } else {
            return -1;
        }
    }
    if (!parseInt(version1.concat(version2).join(''))) return 0;
    return version1.length ? 1: -1;
};