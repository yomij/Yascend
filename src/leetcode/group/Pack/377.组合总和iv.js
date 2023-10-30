/**
 * 377. 组合总和iv
 * Date: 2023/09/08
 * Tag: PACK
 * Link: https://leetcode.cn/problems/combination-sum-iv
 */

/**
 *
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = new Array(target + 1).fill(0)
    // 默认有一次
    dp[0] = 1
    for (let i = 0; i <= target; i++) {
        for (let n of nums) {
            i >= n && (
                dp[i] = dp[i] + dp[i - n]
            )
        }
    }
    return dp[target]
};