/**
 * Date: 2020/06/28
 * Question:
   返回 A 的最短的非空连续子数组的长度，该子数组的和至少为 K 。
   如果没有和至少为 K 的非空子数组，返回 -1 。
 */


/**
 * @description 滑动窗口求解
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let start = 0
  let end = 0
  let sum = 0
  let res = Infinity
  for (let i = 0; i < nums.length; i++) {
    sum += nums[end]
    while (sum >= s) {
      res = Math.min(res, end - start + 1)
      sum -= nums[start]
      start++
    }
    end++
  }
  return res === Infinity ? 0 : res
};

