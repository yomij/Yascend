/**
 * Date: 2020/08/02
 * Tag: Double Pointer
 * Question:
 *  15. 三数之和
 *  给你一个包含 n 个整数的数组 nums，
 *  判断 nums 中是否存在三个元素 a，b，c ，
 *  使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 *  注意：答案中不可以包含重复的三元组。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum (nums) {
  // 从小到大排序
  nums = nums.sort((a, b) => a - b)
  let tail, head = 0
  let result = []
  // 遍历数组元素
  for (let i = 0; i < nums.length - 2; i++) {
    // 当前值大于等于零的话， 没有计算的必要了
    if (nums[i] > 0) return result
    // 如果之前的值和现在相等，说明已经计算过，直接跳过
    if (nums[i - 1] === nums[i]) continue
    // 设置头指针
    head = i + 1
    // 设置尾指针
    tail = nums.length - 1
    while (tail > head) {
      let res = nums[tail] + nums[head] + nums[i]
      // 如果结果等于零
      if (res === 0) {
        // 放入结果
        result.push([nums[tail], nums[head], nums[i]])
        // 如果头部有相等的数字，跳过
        while (nums[head] === nums[head + 1]) head++
        // 如果尾部有相同数据，也跳过
        while (nums[tail] === nums[tail - 1]) tail--
        // 头尾各移动一格
        head++
        tail--
      }
      // 大于零 尾指针向左移
      else if (res > 0) tail--
      // 小于零 头指针向右移
      else head++
    }
  }
  return result
}

threeSum([-1,0,1,2,-1,-4])
// [ [2, -1, -1], [1, 0, -1] ]
