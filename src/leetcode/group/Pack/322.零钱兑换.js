/**
 * 322. 零钱兑换
 * Date: 2023/09/08
 * Tag: PACK
 * Link: https://leetcode.cn/problems/coin-change
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let c of coins) {
        for (let i = c; i <= amount; i++) {
            dp[i] = Math.min(dp[i - c] + 1, dp[i])
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};