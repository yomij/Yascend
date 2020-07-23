/**
 * Date: 2020/06/28
 * Tag: Dynamic
 * Question:
 *  64. 最小路径和
 *    给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 *    说明：每次只能向下或者向右移动一步。
 */

/**
 * @description 动态规划
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let y = grid.length - 1; let x = grid[0].length - 1
  let i = 1; let j = 0
  if (!x && !y) return grid[x][y] // x, y 为 0 直接返回
  for (;;) {
    let top = j === 0 ? Infinity : grid[j - 1][i]
    let left = i === 0 ? Infinity : grid[j][i - 1]
    // 当前点的最小路径值为，当前值 + 该值上面和左边的最小值
    grid[j][i] = grid[j][i] + Math.min(top, left)
    if (i === x && j === y) return grid[j][i] // 到达左下角，返回
    if (i < x) i++ // 计算当前行的下一个
    else if (j < y) { // 到下一行继续计算
      i = 0
      j++
    }
  }
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
let minPathSum1 = function (grid) {
  let y = grid.length - 1; let x = grid[0].length - 1
  let i = 0; let j = 0
  for (; j <= y; j++) {
    for (; i <= x; i++) {
      if (i > 0 && j > 0) grid[j][i] = grid[j][i] + Math.min(grid[j - 1][i], grid[j][i - 1])
      else if (i > 0) grid[j][i] = grid[j][i] + grid[j][i - 1]
      else if (j > 0) grid[j][i] = grid[j][i] + grid[j - 1][i]
    }
    i = 0
  }
  return grid[y][x]
}
