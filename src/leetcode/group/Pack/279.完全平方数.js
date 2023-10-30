/**
 * 279. 完全平方数
 * Date: 2023/09/08
 * Tag: PACK
 * Link: https://leetcode.cn/problems/perfect-squares
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const arr = new Array(~~(n ** 0.5)).fill(0).map((_, i) => (i + 1) ** 2)
    const dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    for (let i of arr) {
        for (let j = i; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - i] + 1)
        }
    }
    return dp[n]
};