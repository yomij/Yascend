/**
 * Date: 2020/07/18
 * Tag: Dichotomy
 * Question:
 *  35. 搜索插入位置
 *  给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 *  如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 */

const searchInsert = (nums, target) => {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = ~~((left + right) / 2)
    if (nums[mid] === target) return mid
    else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
};

console.log(searchInsert([1,3], 142))
