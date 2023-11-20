/**
 * Date: 2023/11/20
 *
 * Title: 120. 三角形最小路径和.js
 *
 * Tag: 动态规划
 *
 * Desc:
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 *
 * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 *
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const dp = []
    for (let i = 0; i < triangle.length; i++) {
        dp.push([...triangle[i]])
        for (let j = 0; j < triangle[i].length; j++) {
            if (i) {
                dp[i][j] = Math.min(dp[i - 1][j] ?? Infinity, dp[i - 1][j - 1] ?? Infinity) + triangle[i][j]
            }
        }
    }
    return Math.min(...dp.pop())
};