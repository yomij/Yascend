/**
 * Date: 2020/06/30
 * Question:
 *  215. 数组中的第K个最大元素
 *  在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  quickSort(nums)
  return nums[k - 1]
};

// 快排
function quickSort(nums, l, r) {
  if (l >= r) return
  let i = l
  let j = r
  let guard = nums[i]
  while (i !== j) {
    while (i < j && nums[j] < guard) j--
    nums[i] = nums[j]
    while (i < j && nums[i] >= guard) i++
    nums[j] = nums[i]
  }
  nums[i] = guard
  quickSort(nums, l, i - 1)
  quickSort(nums, i + 1, r)
}
