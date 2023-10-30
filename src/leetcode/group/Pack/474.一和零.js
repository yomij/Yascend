/**
 * 474. 一和零
 * Date: 2023/09/08
 * Tag: PACK
 * Link: https://leetcode.cn/problems/ones-and-zeroes
 */

/**
 *
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    const mp = strs.map(i => {
        let arr = [0, 0]
        for (let c of i) arr[c]++
        return arr
    })
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    for (let s of mp) {
        for (let i = m; i >= s[0]; i--) {
            for (let j = n; j >= s[1]; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - s[0]][j - s[1]] + 1)
            }
        }
    }
    return dp[m][n]
};