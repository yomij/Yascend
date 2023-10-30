/**
 * Date: 2023/10
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0
    let start = 0
    let end = 0
    let res = Infinity
    while (end < nums.length) {
        sum += nums[end]
        while (sum >= s) {
            res = Math.min(res, end - start + 1)
            sum -= nums[start]
            start++
        }
        end++
    }
    return  res === Infinity ? 0 : res
};

minSubArrayLen(7, [2,3,1,2,4,3])