/**
 * Date: 2021/01/03
 * Tag: Stack
 * Question:
 *  503. 下一个更大元素Ⅱ
 *  给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。
 *  数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。
 *  如果不存在，则输出 -1。
 *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let stack = []
  let res = new Array(nums.length).fill(-1)
  // 因为时循环数组 所以要遍历两次
  for (let j = 0; j < 2 * nums.length; j++) {
    let index = j % nums.length
    let indexNext = (j + 1) % nums.length
    // 先将数组下标 推入栈
    stack.push(index)
    // 如果下一个数组值大于当前的
    if (nums[indexNext] > nums[index]) {
      // 比 nums[indexNext] 小的栈元素都出栈
      while (stack.length && nums[stack[stack.length - 1]] < nums[indexNext]) {
        const i = stack.pop()
        // 即栈顶元素（i）对应的元素的下一个最大元素 就是 nums[indexNext]
        res[i] = nums[indexNext]
      }
    }
  }
  return res
}
