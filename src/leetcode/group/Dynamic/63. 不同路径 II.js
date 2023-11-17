/**
 * Date: 2023/11/17
 *
 * Title: 63. 不同路径 II.js
 *
 * Tag: 动态规划
 *
 * Desc:
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
 *
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 *
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 *
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] || obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]) {
        return  0
    }
    const dp = new Array(obstacleGrid.length).fill(0).map(() => new Array(obstacleGrid[0].length).fill(0))
    dp[0][0] = 1
    for (let i = 0; i < obstacleGrid.length; i++) {
        for (let j = 0; j < obstacleGrid[0].length; j++) {
            if (!i && !j) continue
            if (!obstacleGrid[i][j]) {
                dp[i][j] = (dp[i - 1] ? dp[i - 1][j] : 0) + (dp[i][j  - 1] || 0)
            }
        }
    }
   return dp[dp.length - 1][dp[0].length - 1]
};

uniquePathsWithObstacles([[0], [0]])