/**
 * Date: 2020/07/22
 * Tag: Dichotomy
 * Question:
 *  剑指 Offer 11. 旋转数组的最小数字
 *  把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  
 *
 */

/**
 * @description 二分法求解
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  let left = 0, right = numbers.length - 1
  while (left < right) {
    // 除二向下取整
    let mid = (left + right) >> 1
    // 如果 中间的大于最右边的 说明旋转点在 [mid + 1, right]
    if (numbers[right] < numbers[mid]) left = mid + 1
    // 如果 最右边的大于中间的 说明旋转点在 [left, mid]
    else if (numbers[right] > numbers[mid]) right = mid
    // 如果 最右边的等于中间的 未知点的位置，变更右边重新查找
    else right--
  }
  return numbers[left]
};
