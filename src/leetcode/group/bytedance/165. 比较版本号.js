/**
 * Date: 2023/10
 *
 * 给你两个版本号 version1 和 version2 ，请你比较它们。
 *
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(i => Number(i))
    const v2 = version2.split('.').map(i => Number(i))
    const l = Math.max(v1.length, v2.length)
    for (let i = 0; i < l; i++) {
        const a = v1[i] || 0
        const b = v2[i] || 0
        if(a > b) return 1
        else if (a < b) return -1
    }
    return 0
};