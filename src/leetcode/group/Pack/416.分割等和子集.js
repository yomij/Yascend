/**
 * 416. 分割等和子集
 * Date: 2023/09/08
 * Tag: PACK
 * Link: https://leetcode.cn/problems/partition-equal-subset-sum
 */

/**
 *
 * @description 转换为0-1背包问题
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((p, v) => p + v)
    if (sum & 1) return false;
    const target = sum / 2
    // dp[i] 为容量为i的背包的最大价值
    let dp = new Array(target + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
    }
    return dp[target] === target
};