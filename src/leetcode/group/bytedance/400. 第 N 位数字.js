/**
 * Date: 2023/10/30
 *
 * 给你一个整数 n ，请你在无限的整数序列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...] 中找出并返回第 n 位上的数字。
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let c = 1
    while (n > 0) {
        let temp = n
        n -= 9 * 10 ** (c - 1) * c
        if (n <= 0) {
            const idx = Math.ceil(temp / c)
            const num = 10 ** (c - 1) + idx - 1
            const i = temp - (idx - 1) * c - 1
            return String(num)[i]
        }
        c++
    }
};