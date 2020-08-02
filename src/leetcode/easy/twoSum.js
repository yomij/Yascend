/**
 * Date: 2020/07/20
 * Tag: Double Pointer
 * Question:
 *  167. 两数之和 II - 输入有序数组 (剑指 Offer 57. 和为s的两个数字 同)
 *  给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 *  函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 *
 */

/**
 * @description 双指针求解
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (left <= right) {
    let sum = numbers[left] + numbers[right]
    if (sum > target) right-- // 和大于目标，右指针望左移
    else if (sum === target) return [left + 1, right + 1] // 等于,返回结果
    else left++ // 小于，左指针向右移
  }
  return  []
};

console.log(twoSum([2,7,11,15], 9))
