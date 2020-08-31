/**
 * Date: 2020/08/31
 * Tag: Stack
 * Question:
 *  456. 132模式
 *  给定一个整数序列：a1, a2, ..., an，
 *  一个132模式的子序列 ai, aj, ak 被定义为：当 i < j < k 时，ai < ak < aj。
 *  设计一个算法，当给定有 n 个数字的序列时，验证这个序列中是否含有132模式的子序列。
 *  注意：n 的值小于15000。
 *
 */

/**
 * @description 栈求解 参考官方解法 https://leetcode-cn.com/problems/132-pattern/solution/132mo-shi-by-leetcode-2/
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  let stack = []
  let mins = []
  let min = Infinity
  for (let num of nums) {
    if (num < min) min = num
    mins.push(min)
  }
  for (let i = nums.length; i > 0; i--) {
    let num = nums[i]
    // 为空直接放入
    if (num > mins[i] && !stack.length) stack.push(num)
    if (num > mins[i] && num < stack[stack.length - 1]) stack.push(num)
    if (num > stack[stack.length - 1]) {
      while (stack.length) if (stack.pop() > mins[i]) return true
    }
  }
  return false
};
