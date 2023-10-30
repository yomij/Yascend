/**
 * 1049. 最后一块石头的重量 II
 * Date: 2023/09/08
 * Tag: PACK
 * Link: https://leetcode.cn/problems/last-stone-weight-ii
 */

/**
 * @description 转换为0-1背包问题
 * @description 本质为两数据集之差最小，只需要找到最接近 sum / 2 的数据集价值相剪即可
 * @param stones
 * @returns {number}
 */
var lastStoneWeightII = function(stones) {
    const sum = stones.reduce((s, i) => s + i, 0)
    const target = Math.floor(sum / 2)
    const dp = new Array(target + 1).fill(0)
    for (let weight of stones) {
        for (let idx = target; idx >= weight; idx--) {
            dp[idx] = Math.max(dp[idx], dp[idx - weight] + weight)
        }
    }
    return Math.abs(sum - dp[target] - dp[target])
}
