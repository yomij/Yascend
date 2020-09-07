/**
 * Date: 2020/09/07
 * Tag: Double Pointer
 * Question:
 *  11. 盛最多水的容器
 *  给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 *  在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 *  找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *  说明：你不能倾斜容器，且 n 的值至少为 2。
 *
 */


/**
 * @description 最大值 = |max(x1 - x2)| * |min(y1 - y2)|
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0, j = height.length - 1
  let max = -Infinity
  while (i !== j) {
    if (height[i] < height[j]) {
      max = Math.max(max, (j - i) * height[i])
      i++
    } else {
      max = Math.max(max, (j - i) * height[j])
      j--
    }
  }
  return max
};
