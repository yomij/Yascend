/**
 * Date: 2023/10
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if (num2.length > num1.length) [num1, num2] = [num2, num1]
    let f = 0
    let res = ''
    for (let i = num1.length - 1; i >= 0; i--) {
        const shortIdx = i - num1.length + num2.length
        let v = Number(num1[i]) + Number(num2[shortIdx] || 0) + f
        if (v >= 10) {
            f = 1
            v -= 10
        } else {
            f = 0
        }
        res = v + res
    }
    f && (res = f + res)
    return res
};