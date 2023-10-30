/**
 * Date: 2023/10
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let m = Infinity
    let res = -Infinity
    for (let p of prices) {
        m = Math.min(m, p)
        res = Math.max(res, p - m)
    }
    return res
};